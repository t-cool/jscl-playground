;; CLOS example
(defclass Animal()
  ((name :initarg :name 
         :initform "animal")
   (age  :initarg :age
         :initform 0)))

(defclass Human(Animal)
  ((hobby :initarg :hobby
          :initform "travel")))
  
(setq animal1 (make-instance 'Animal))
(setq human1 (make-instance 'Human))
(print (slot-value animal1 'name))
(print (slot-value human1 'hobby))

(setq animal2 (make-instance 'Animal :name "dog" :age 10))
(setq human2 (make-instance 'Human :name "Bob" :hobby "PC"))
(print (slot-value animal2 'name))
(print (slot-value human2 'hobby))