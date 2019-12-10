#!/bin/bash
if  ! [ -x "$(command -v node)" ]; then
	echo "Please install NodeJS from here: https://nodejs.org/en/"
else
	npm install
	echo -e "--------------------------------------------------------------------------------------"
	printf "\n\n    Successfully installed!\n    Run ./binance_market_maker_js.sh --apiKey=<your API Key> --apiSecret=<your API Secret> --spread=3 --exposure=2 --base=BTC --stock=ETH to start \n\n"
fi

