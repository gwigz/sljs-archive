#!/usr/bin/env python
import re
import os

regex = r"(\s+\/\/ tslint:disable-next-line:max-line-length){2,}"
replaceWith = r"\n    // tslint:disable-next-line:max-line-length"

for dirName, subdirList, fileList in os.walk('.'):
    print('Found directory: %s' % dirName)
    for inputFilePathName in fileList:
        print('\t%s' % inputFilePathName)
        
        with open(inputFilePathName, 'r') as myfile:
            text = myfile.read()
        
        newText = re.sub(regex, replaceWith, text)
        
        with open(inputFilePathName, 'w') as myfile:
            myfile.write(newText)

