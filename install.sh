#!/bin/bash
if  ! [ -x "$(command -v node)" ]; then
	echo "Please install NodeJS from here: https://nodejs.org/en/"
else
	npm install
	echo -e "--------------------------------------------------------------------------------------"
	printf "\n\n    Successfully installed!\n    Run ./binance_market_maker_js.sh to start \n\n"
fi

