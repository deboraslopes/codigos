from enum import Enum     # for enum34, or the stdlib version
# from aenum import Enum  # for the aenum version
Animal = Enum('Animal', 'ant bee cat dog')

Animal.ant  # returns <Animal.ant: 1>
Animal['ant']  # returns <Animal.ant: 1> (string lookup)
Animal.ant.name  # returns 'ant' (inverse lookup)