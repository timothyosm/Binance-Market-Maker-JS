
apiKey=
apiSecret=
spread=
base=
stock=

for i in "$@"; do
	case $1 in 
		--apiKey=*) 		shift
							apiKey="${i#*=}"
							;;
		--apiSecret=*) 		shift
							apiSecret="${i#*=}"
							;;
		--spread=* | -s=*)	shift
							spread="${i#*=}"
							;;
		--exposure=* | -e=*)	shift
								exposure="${i#*=}"
								;;
		--base=* | -b=*)	shift
							base="${i#*=}"
							;;
		--stock=* | -s=*) 	shift
							stock="${i#*=}"
							;;
		*) echo "invalid option passed in"
			exit 1
	esac
done

node ./src/main.js --apiKey=$apiKey --apiSecret=$apiSecret --spread=$spread --base=$base --stock=$stock --exposure=$exposure



