#!/bin/sh

BASE=`dirname $0`

while getopts :v OPT; do
    case $OPT in
        v|+v)
            VERBOSE=t
            ;;
        *)
            echo "usage: `basename $0` [+-v} [--] ARGS..."
            exit 2
    esac
done
shift `expr $OPTIND - 1`
OPTIND=1

sbcl --load "$BASE/jscl.lisp" --eval "(jscl:bootstrap $VERBOSE)" --eval '(quit)'
