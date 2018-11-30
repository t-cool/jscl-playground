;; Three.js on JSCL
;; Cmd-E: send the code to REPL and evaluate it.
;; Please reload the Window when you try another example.

;; change color
(defun change-color(r g b)
  (setf #j:threejs:material:color:r r)
  (setf #j:threejs:material:color:g g)
  (setf #j:threejs:material:color:b b))
 
(change-color 1 1 0)

;; wireframe off
(setf #j:threejs:material:wireframe 0)
