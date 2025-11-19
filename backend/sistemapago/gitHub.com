https://github.com/MarcelMotta-J/sistemapago

…or create a new repository on the command line
echo "# sistemapago" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MarcelMotta-J/sistemapago.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/MarcelMotta-J/sistemapago.git
git branch -M main
git push -u origin main

1- ACESSAR
root@brainiac-Inspiron-3437:/home/brainiac/projects/sistemas-pagos-frontend# cd /home/brainiac/Documents/javaProjects/sistemapago


1- INSTALAR GIT
root@brainiac-Inspiron-3437:/home/brainiac/projects/sistemas-pagos-frontend# cd /home/brainiac/Documents/javaProjects/sistemapago
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
Initialized empty Git repository in /home/brainiac/Documents/javaProjects/sistemapago/.git/

root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git branch -m main
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# 

3 - VER ARQUIVOS QUE ESTÃO PARA SEREM VERSIONADOS:
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago#  git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitattributes
	.gitignore
	.mvn/
	gitHub.com
	mvnw
	mvnw.cmd
	pom.xml
	read.txt
	src/
	swaggler/

nothing added to commit but untracked files present (use "git add" to track)
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago#

4- ADICIONAR NO REPO LOCAL E AO FLUXO DE VERSIONAMENTO
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git add .
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# 

root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   .gitattributes
	new file:   .gitignore
	new file:   .mvn/wrapper/maven-wrapper.properties
	new file:   gitHub.com
	new file:   mvnw
	new file:   mvnw.cmd
	new file:   pom.xml
	new file:   read.txt
	new file:   src/main/java/com/marcel/sistemapago/SistemapagoApplication.java
	new file:   src/main/java/com/marcel/sistemapago/controller/PagoController.java
	new file:   src/main/java/com/marcel/sistemapago/dto/NewDto.java
	new file:   src/main/java/com/marcel/sistemapago/entities/Estudiante.java
	new file:   src/main/java/com/marcel/sistemapago/entities/Pago.java
	new file:   src/main/java/com/marcel/sistemapago/enums/PagoStatus.java
	new file:   src/main/java/com/marcel/sistemapago/enums/TypePago.java
	new file:   src/main/java/com/marcel/sistemapago/repository/EstudianteRepository.java
	new file:   src/main/java/com/marcel/sistemapago/repository/PagoRepository.java
	new file:   src/main/java/com/marcel/sistemapago/service/PagoService.java
	new file:   src/main/resources/application.properties
	new file:   src/test/java/com/marcel/sistemapago/SistemapagoApplicationTests.java
	new file:   swaggler/actualizarPago.png
	new file:   swaggler/atualizarPagoTela2.png
	new file:   swaggler/enset-data.txt
	new file:   swaggler/estudiantes.json
	new file:   swaggler/pagoAdicionadoMarcel.png
	new file:   swaggler/pagoAdicionadoMarcelOutratela.png
	new file:   swaggler/pagoCriadoRaulRamires.png
	new file:   swaggler/pagoCriadoRaulRamirez.txt
	new file:   swaggler/pagoCriadoRaulRamirezSegundaTela.png
	new file:   swaggler/pagos.json

root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# 


5 - INFORMAR AO GIT MUDANÇAS, commit (SAVE POINT)
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git commit -a -m "envio do backend"
[main (root-commit) e71adbb] envio do backend
 30 files changed, 2095 insertions(+)
 create mode 100644 .gitattributes
 create mode 100644 .gitignore
 create mode 100644 .mvn/wrapper/maven-wrapper.properties
 create mode 100644 gitHub.com
 create mode 100755 mvnw
 create mode 100644 mvnw.cmd
 create mode 100644 pom.xml
 create mode 100644 read.txt
 create mode 100644 src/main/java/com/marcel/sistemapago/SistemapagoApplication.java
 create mode 100644 src/main/java/com/marcel/sistemapago/controller/PagoController.java
 create mode 100644 src/main/java/com/marcel/sistemapago/dto/NewDto.java
 create mode 100644 src/main/java/com/marcel/sistemapago/entities/Estudiante.java
 create mode 100644 src/main/java/com/marcel/sistemapago/entities/Pago.java
 create mode 100644 src/main/java/com/marcel/sistemapago/enums/PagoStatus.java
 create mode 100644 src/main/java/com/marcel/sistemapago/enums/TypePago.java
 create mode 100644 src/main/java/com/marcel/sistemapago/repository/EstudianteRepository.java
 create mode 100644 src/main/java/com/marcel/sistemapago/repository/PagoRepository.java
 create mode 100644 src/main/java/com/marcel/sistemapago/service/PagoService.java
 create mode 100644 src/main/resources/application.properties
 create mode 100644 src/test/java/com/marcel/sistemapago/SistemapagoApplicationTests.java
 create mode 100644 swaggler/actualizarPago.png
 create mode 100644 swaggler/atualizarPagoTela2.png
 create mode 100644 swaggler/enset-data.txt
 create mode 100644 swaggler/estudiantes.json
 create mode 100644 swaggler/pagoAdicionadoMarcel.png
 create mode 100644 swaggler/pagoAdicionadoMarcelOutratela.png
 create mode 100644 swaggler/pagoCriadoRaulRamires.png
 create mode 100644 swaggler/pagoCriadoRaulRamirez.txt
 create mode 100644 swaggler/pagoCriadoRaulRamirezSegundaTela.png
 create mode 100644 swaggler/pagos.json
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git status
On branch main
nothing to commit, working tree clean
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago#


6 - - DISPONIBILIZANDO AO REPO REMOTO

A- CRIAR NO SITE GITHUB
https://github.com/MarcelMotta-J/sistemapago

B- ADICIONANDO ORIGEM REMOTA OU CONEXAO DO PC COM REPO DO GIT
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git remote add origin https://github.com/MarcelMotta-J/sistemapago
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago#

C- 
root@brainiac-Inspiron-3437:/home/brainiac/Documents/javaProjects/sistemapago# git branch -M main

D- ENVIANDO DO REPO LOCAL PARA O REPO REMOTO NO GITHUB





