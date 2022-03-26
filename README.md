# Payment Component with Paypal

![Imagen de muestra](https://raw.githubusercontent.com/RaulprTech/paypal-react-fastapi/master/frontend/Paypal-Button-Image.png)

## React and FastApi

Este repositorio contiene un componente de pagos con paypal listo para agregar. El frontend se basa en las instrucciones del  [Paypal Developer Portal]("https://developer.paypal.com/sdk/js/configuration/") y el backend usa el [REST API SDK for Python V2]("https://github.com/paypal/Checkout-Python-SDK")

## COMO EMPEZAR A USAR EL FRONTEND

1. Descarga los node_modules

```
npm install
```

1. Para el desplegar en modo desarrollo puedes usar

```
npx vite
```

2. Para convertir a sitios estaticos

```
npx vite build
```

Para mas opciones puedes cosultar la documentacion de [Vite]("https://developer.paypal.com/sdk/js/configuration/")

## COMO EMPEZAR A USAR EL BAKCEND

1. Crear un ambiente virtual con Python3

```
virtualenv env -p python3
```

2. Activar el ambiente virtual

```
source env/bin/activate
```

3. Instalar las librerías necesarias que se encuentran en el archivo requirements.txt

```
pip install -r requirements.txt
```

### PARA DESPLEGAR USA

```
uvicorn main:app --reload
```

* main es el nombre del archivo main.py
* app es el nombre de la variable de FASTAPI inicializada en el archivo main

Para mas informacion consulta la documentacion de [FastAPI]("https://fastapi.tiangolo.com/")

