// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OHLCVStorage {
    struct OHLCV {
        uint256 open;
        uint256 high;
        uint256 low;
        uint256 close;
        uint256 volume;
    }

    mapping(string => uint256) public symbolToId; // Mapping symbol thành ID ngắn gọn
    mapping(uint256 => mapping(uint256 => OHLCV)) public ohlcvData; // ID -> key -> OHLCV
    mapping(uint256 => uint256) public latestKey; // Lưu key mới nhất theo ID

    address public admin;

    event OHLCVUpdated(uint256 indexed id, uint256 indexed key, uint256 open, uint256 high, uint256 low, uint256 close, uint256 volume);
    event SymbolRegistered(string symbol, uint256 id);
    event OHLCVRolledBack(uint256 indexed id, uint256 indexed key);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerSymbol(string memory symbol, uint256 id) public onlyAdmin {
        require(symbolToId[symbol] == 0, "Symbol already registered");
        symbolToId[symbol] = id;
        emit SymbolRegistered(symbol, id);
    }

    function convertToKey(uint256 year, uint256 month, uint256 day, uint256 hour, uint256 minute) public pure returns (uint256) {
        require(month >= 1 && month <= 12, "Invalid month");
        require(day >= 1 && day <= 31, "Invalid day");
        require(hour < 24, "Invalid hour");
        require(minute < 60, "Invalid minute");

        return year * 1e10 + month * 1e8 + day * 1e6 + hour * 1e4 + minute * 1e2;
    }

    function updateOHLCV(string memory symbol, uint256 year, uint256 month, uint256 day, uint256 hour, uint256 minute,
        uint256 open, uint256 high, uint256 low, uint256 close, uint256 volume) public {

        uint256 id = symbolToId[symbol];
        require(id > 0, "Symbol not registered");

        uint256 key = convertToKey(year, month, day, hour, minute);
        OHLCV storage data = ohlcvData[id][key];

        if (data.volume > 0) {
            data.high = high > data.high ? high : data.high;
            data.low = low < data.low ? low : data.low;
            data.close = close;
            data.volume += volume;
        } else {
            ohlcvData[id][key] = OHLCV(open, high, low, close, volume);
        }

        latestKey[id] = key;
        emit OHLCVUpdated(id, key, open, high, low, close, volume);
    }

    function getOHLCV(string memory symbol, uint256 year, uint256 month, uint256 day, uint256 hour, uint256 minute)
        public view returns (uint256 open, uint256 high, uint256 low, uint256 close, uint256 volume) {

        uint256 id = symbolToId[symbol];
        require(id > 0, "Symbol not registered");

        uint256 key = convertToKey(year, month, day, hour, minute);
        OHLCV storage data = ohlcvData[id][key];

        require(data.volume > 0, "OHLCV not found");

        return (data.open, data.high, data.low, data.close, data.volume);
    }

    function getLatestOHLCV(string memory symbol) public view returns (uint256 open, uint256 high, uint256 low, uint256 close, uint256 volume) {
        uint256 id = symbolToId[symbol];
        require(id > 0, "Symbol not registered");

        uint256 key = latestKey[id];
        OHLCV storage data = ohlcvData[id][key];

        require(data.volume > 0, "No recent OHLCV data");

        return (data.open, data.high, data.low, data.close, data.volume);
    }

    function rollbackOHLCV(string memory symbol, uint256 year, uint256 month, uint256 day, uint256 hour, uint256 minute) public onlyAdmin {
        uint256 id = symbolToId[symbol];
        require(id > 0, "Symbol not registered");

        uint256 key = convertToKey(year, month, day, hour, minute);
        require(ohlcvData[id][key].volume > 0, "OHLCV not found");

        delete ohlcvData[id][key];

        emit OHLCVRolledBack(id, key);
    }
}
