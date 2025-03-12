Challenge Amigo Secreto
Descripción: 
  Es una aplicación web que permite a los usuarios agregar los nombres de sus amigos y realizar un sorteo para asignarles un "amigo secreto".

Estructura del proyecto
  HTML: Para la estructura de la página.
  CSS: Para el diseño y la apariencia visual.
  JavaScript: Para la funcionalidad interactiva.

  URL del proyecto:
   https://github.com/Javier-Alonso-28/Challenge-amigo-secreto..git

Funcionalidades
  
  ![image](https://github.com/user-attachments/assets/3bed136c-56d2-447a-8f02-c367035335da)

 En la imagen podemos ver el codigo en donde la function agregarAmigo(), es la base donde podemos empezar a agregar a nuestros amigos,
 en NombresAmigos.push(nombre); esta parte del codigo es para agregar los nombres de nuestros amigos,
 tambien tenemos un alert(); donde si no se escribe un nombre y solo dejas en blanco y das click, salga una ventanita de advertencia.

 ![image](https://github.com/user-attachments/assets/ff958f07-e142-4701-aed2-f93debff889d)

 En el siguiente codigo tenemos la function mostrarLista(), aqui es donde ya se empieza a mostrar a los amigos que vamos agregando, 
 cada vez que demos un click en la pagina web para agregar a un amigo se vuelve a limpiar la barra para agregar a un siguiente amigo.
 en el codigo ListaAmigos.appendchild(li); esta parte de codigo va mostrando la lista de amigos que vamos agregando. 

 ![image](https://github.com/user-attachments/assets/93a0faa8-1123-4a67-8b60-dbcaf382088a)

 En esta parte del código ya podemos ver la function SortearAmigo(), donde tenemos una condición que nos dice que para poder jugar al "Amigo Secreto" 
 tenemos que tener como minimo 2 amigos; tambien tenemos algunas constantes donde le pedimos al código que haga un sorteo aleatorio con el rango de
 lista que hemos creado esta parte del codigo vendria siendo Math.floor(Math.random()* NombresAmigos.length), 
 y para finalizar tenemos la variable resultadoElemento.innerHTML, donde le escribimos una texto y en ${amigoSecreto}, 
 nos da como respuesta quien es nuestro "AmigoSecreto".

 

 
 
