root@67b7d23db57b:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  nodesource_setup.sh  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@67b7d23db57b:/# cd root/
root@67b7d23db57b:~# ls
alx-backend-javascript
root@67b7d23db57b:~# cd alx-backend-javascript/
root@67b7d23db57b:~/alx-backend-javascript# ls
0x00-ES6_basic  0x01-ES6_promise  0x02-ES6_classes  0x03-ES6_data_manipulation  0x04-TypeScript  0x05-Node_JS_basic  README.md
root@67b7d23db57b:~/alx-backend-javascript# mkdir 0x06-unittests_in_js
root@67b7d23db57b:~/alx-backend-javascript# ls
0x00-ES6_basic  0x01-ES6_promise  0x02-ES6_classes  0x03-ES6_data_manipulation  0x04-TypeScript  0x05-Node_JS_basic  0x06-unittests_in_js  README.md
root@67b7d23db57b:~/alx-backend-javascript# cd 0x06-unittests_in_js
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# ls
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# mkdir # Unittests in JS
mkdir: missing operand
Try 'mkdir --help' for more information.
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# 
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# This project contains tasks for learning to create unittests in NodeJS.
...
        ✓ ...
        ...

      130 passing (35ms)
    bob@dylan:~$
    ```

+ [x] 1. **Combining descriptions**
  + **Create a new file named [`1-calcul.js`](1-calcul.js):**
    + Upgrade the function you created in the previous task ([`0-calcul.js`](0-calcul.js)).
    + Add a new argument named `type` at first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string).
    + When type is `SUM`, round the two numbers, and add `a` to `b`.
    + When type is `SUBTRACT`, round the two numbers, and subtract `b` from `a`.
    + When type is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to 0, return the string `Error`.
  + **Test cases:**
    + Create a file [`1-calcul.test.js`](1-calcul.test.js) that contains test cases of this function.
    + You can assume `a` and `b` are always number.
    + Usage of `describe` will help you to organize your test cases.
  + **Tips:**
    + For the sake of the example, this test suite is slightly extreme and probably not needed.
    + However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases.
  + **Requirements:**
    + You have to use `assert`.
    + You should be able to run the test suite using `npm test 1-calcul.test.js`.
    + Every test should pass without any warning.
  + **Expected output:**
    ```powershell
    > const calculateNumber = require("./1-calcul.js");
    > calculateNumber('SUM', 1.4, 4.5)
    6
    > calculateNumber('SUBTRACT', 1.4, 4.5)
    -4
    > calculateNumber('DIVIDE', 1.4, 4.5)
    0.2
    > calculateNumber('DIVIDE', 1.4, 0)
    'Error'
    ```

+ [x] 2. **Basic test using Chai assertion library**
  + While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.
  + **Let's install Chai with npm:**
    + Copy the file [`1-calcul.js`](1-calcul.js) in a new file [`2-calcul_chai.js`](2-calcul_chai.js) (same content, same behavior).
    + Copy the file [`1-calcul.test.js`](1-calcul.test.js) iThis: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# 
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# ## Learning Objectives
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# 
croot@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + How to use Mocha to write a test suite.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + How to use different assertion libraries (Node or Chai).
bash: syntax error near unexpected token `('
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + How to present long test suites.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + When and how to use spies.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + When and how to use stubs.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + What are hooks and when to use them.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + Unit testing with Async functions.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + How to write integration tests with a small node server.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# 
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# ## Tasks To Complete
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# 
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js# + [x] 0. **Basic test with Mocha and Node assertion library**
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Install Mocha using npm:**
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + Set up a scripts in your [`package.json`](package.json) to quickly run Mocha using `npm test`.
bash: syntax error near unexpected token `('
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + You have to use `assert`.
assert: command not found
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Create a new file named [`0-calcul.js`](0-calcul.js):**
bash: syntax error near unexpected token `('
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + Create a function named `calculateNumber`. It should accepts two arguments (number) `a` and `b`.
bash: syntax error near unexpected token `('
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + The function should round `a` and `b` and return the sum of it.
a: command not found
b: command not found
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Test cases:**
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + Create a file [`0-calcul.test.js`](0-calcul.test.js) that contains test cases of this function
bash: syntax error near unexpected token `('
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + You can assume `a` and `b` are always number.
a: command not found
b: command not found
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + Tests should be around the "rounded" part.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Tips:**
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + For the sake of the example, this test suite is slightly extreme and probably not needed.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Requirements:**
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + You have to use `assert`.
assert: command not found
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + You should be able to run the test suite using `npm test 0-calcul.test.js`.
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /root/alx-backend-javascript/0x06-unittests_in_js/package.json
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open '/root/alx-backend-javascript/0x06-unittests_in_js/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2024-08-22T13_26_45_102Z-debug.log
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     + Every test should pass without any warning.
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Expected output:**
+: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     ```powershell
>     > const calculateNumber = require("./0-calcul.js");
>     > calculateNumber(1, 3)
>     4
>     > calculateNumber(1, 3.7)
>     5
>     > calculateNumber(1.2, 3.7)
>     5
>     > calculateNumber(1.5, 3.7)
>     6
>     >
>     ```
powershell: command not found
bash: command substitution: line 2: syntax error near unexpected token `('
bash: command substitution: line 2: `    > const calculateNumber = require("./0-calcul.js");'
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#   + **Run test:**
Requirements:**
  +: command not found
root@67b7d23db57b:~/alx-backend-javascript/0x06-unittests_in_js#     ```powershell
>     bob@dylan:~$ npm test 0-calcul.test.js
> 
>     > task_0@1.0.0 test /root
>     > ./node_modules/mocha/bin/mocha "0-calcul.test.js"
> 
>       calculateNumber
>         ✓ ...
>         ✓ ...
>         ✓ ...
>         ...
> 
>       130 passing (35ms)
>     bob@dylan:~$
>     ```
powershell: command not found
bob@dylan:~$: command not found
bash: ./node_modules/mocha/bin/mocha: No such file or directory

