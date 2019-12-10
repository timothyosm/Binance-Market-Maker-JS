# Binance-Market-Maker-JS
Market making bot for binance, written in JavaScript

**To Install:**
```
git clone https://github.com/Dylan-Phoon/Binance-Market-Maker-JS
cd Binance-Market-Maker-JS
./install.sh
```

**Quick start:**
```
./binance_market_maker_js.sh --apiKey=<your API Key> --apiSecret=<your API Secret> --spread=3 --exposure=2 --base=BTC --stock=ETH
```

**Parameters**
* `./binance_market_maker_js.sh` takes in 6 arguments;
* `--apiKey=`: Your API Key
* `--apiSecret=`: Your API Secret
* `--spread=`: The spread percentage on the asset you would like to market make on
* `--exposure=`: The maximum percentage of your account you want in the order book at any given time
* `--base=`: The base asset (e.g. in ETHBTC, BTC is the base asset)
* `--stock=`: The stock asset (e.g. in ETHBTC, ETH is the stock asset)

### How it works

The bot will maintain a spread of a given percentage in the order book, based on the last price traded.
It will recalculate the spread and orders, when either your buy or sell maker order gets filled or partially filled.

For example given an order book that looks this;
```
16.8	|
16.7	| -- sell orders
16.5	| -- (your order) (s_1)

15.5 	| -- Last price traded

14.5	| -- (your order) (b_1)
14.124 	| -- buy orders 
12.5	|

``` 

If someone then does a single market buy up to 17, b_1 will be canceled, s_1 will be filled, and the bot will then rebalance so that the new order book looks like this;

```
18.00	| -- (your new order) (s_2)

17.00	| -- Last price traded

16.00	| -- (your new order) (b_2)
14.124 	| -- buy orders 
12.5	|

```

The amount in each order is dependent on the `--exposure=` parameter. It will calculate the total {stock | base} balance * (exposure / 100).
For example;

```
Exposure percentage (e) = 1
Base asset balance (b) = 10
Stock asset balance (s) = 15

buy order amount = b(10) * (e(1) / 100)
sell order amount = s(15) * (e(1) / 100)  
```