########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Kayla Toliver
SID = 1001875457
EMAIL = kvt5457@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=DR03
https://www.youtube.com/watch?v=-cH7LKdI-Ro
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"