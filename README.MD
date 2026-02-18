# Anotações de Aula — Node.js e JavaScript

---
##  O que é Node.js?

Node.js é um ambiente de execução (runtime) que permite rodar JavaScript fora do navegador, principalmente no servidor.

Utiliza o motor V8 do Google Chrome.

---
### Setup


### Verificar instalação
```bash
node -v
npm -v
```
### Instalaçao d0 node e npm

#### Arch 
```
	sudo pacman -Syu
	sudo pacman -S node npm
```
#### Debian
```
sudo apt update
sudo apt install nodejs npm

```
obs: atualizar o sistema antes de realizar a instalação 

### executar programa
```
	node nomeDoPrograma.js
```

### Estrutura inicial (opcional)

```
/******************************************************************* * Objetivo: 
 * Data: 
 * Autor: 
 * Versão: *******************************************************************/
```


## Tipos de Variaveis

Var
	permite a criação de um espaço na memoria do tipo variavel (não usado hj em dia ) se usar, usar com variaveis globais (recomendação)

let
	permite a criação de um espaço na memoria do tipo variavel, utilizado  dentro de blocos de codigos como em funções, nao usado em escopo global

const
	permite a criação de um espaço na memoria onde nao sofrera alteração durante o codigo, pode ser usado tanto global quanto localmente
	dica const usar sempre MAIUSCULA

## Operadores de Comparação

	== compara igualdade
	< permite comparar valores menores
	> permite comparar valores maiores
	<= menor ou igual
	>= maior ou igual
	=== compara conteudo e tipo de dado
	!== permite comparar a diferença de conteudo e a igualdade de tipo de dados
	==! permite comparar a igualdade de dados e a dferença de tipo de dados
	!=! permite compara diferença de conteudo e a diferença de tipo de dados

## Sitaxe

##### Print na tela
	simples 
		console.log(suaVariavel)
		console.log("o texto/msg que vc quiser")
	concatenação	
		console.log("seu texto " + valorDaSuaVariavel)
	

isNaN(suaVariavel)  
	true  caso nao seja um numero
	false  caso seja um numero 
