;; LOGO Turtle on JSCL
;; Cmd-E: send the code to REPL and evaluate it.
;; Please reload the Window when you try another example.

(setf #j:turtle:penColor "green")
(setf #j:turtle:x 100)
(setf #j:turtle:y 10)
(setf #j:turtle:penDown t)
(#j:turtle:drawArrow)
(setf #j:turtle:penColor "red")
(#j:turtle:hexagon 55)
