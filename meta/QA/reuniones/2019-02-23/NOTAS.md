# 2019-02-23 9:00 am EST

Asistentes:
-   Victor Rivas @vctr90
-   Daniel Rodríguez @sadasant
-   Carlos Guerrero @guerrerocarlos

Enlaces:
- [Videollamada (la del calendario)](https://hangouts.google.com/call/xrEagT8Fi9F91xCOeibmAEEM?no_rd).
- [Calendario](https://calendar.google.com/calendar?cid=YjU3NGk1ajRhb2J2Y2U2bTBlbHQ2am1yNThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ)

Temas:
-   React, pero es solo una sugerencia.
-   TDD.
-   Single Sign On para BerserkTech.
-   Cartas 3D.
-   Rendering 3D.
-   Laptops y hardware.
    
Resumen:
-   Víctor habla de su proyecto.
    - Antes era en Go. Ahora es en NodeJS.
    - Empezó con una estructura básica.
    - Está empezando a añadirle tests ahora.
    - No está usando REST, está usando GraphQL.
    - Enlaces que conseguí en paralelo para poder hablar con Víctor:
        -  [GraphQL vs. REST](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b)
        -  [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
        -  [Create a Multiuser GraphQL CRUD(L) App in 10 minutes with the new AWS Amplify CLI (and, in a few extra minutes, add search capabilities with Elasticsearch)](https://medium.com/open-graphql/create-a-multiuser-graphql-crud-l-app-in-10-minutes-with-the-new-aws-amplify-cli-and-in-a-few-73aef3d49545)
-   Carlos responde sobre el unit test:
    -   Unit tests sólo para asegurarse que cambios futuros no rompan nada.
    -   Carlos tiene “[un grabador de inputs](https://github.com/guerrerocarlos/nock-record)” y graba “todos los outputs” (jest) y confirma que los resultados tienen sentido.
    -   Un approach enfocado en velocidad y estabilidad, menos en metodología.
    -   Ejemplo de uso en este repo [https://github.com/guerrerocarlos/s3-database](https://github.com/guerrerocarlos/s3-database)
-   Daniel responde:
    -   Para unit tests de modelos de datos, o datos que dependen de interacciones de usuarios, el approach de Carlos me parece el mejor.
    -   Para APIs ya existentes, se puede reducir la incertidumbre teniendo copias de las respuestas de la API en una carpeta `/fixtures`.
    -   Mi workflow actual de TDD:
        -   Primero hago un integration test que imprima el resultado del API y falle (porque el test no está escrito, o no está bien escrito).
        -   El resultado del API lo añado a la carpeta `/fixtures`.
        -   Escribo unit tests contra mi código, donde mi código agarra los datos de `/fixtures` en vez de hacer el request al API.
        -   Corro el integration test una vez que termine.
    -   Idealmente se separan las funciones del estado / de los side effects, entonces se puede hacer TDD a las funciones diréctamente.
    -   Veo que idealmente un proyecto (pequeño, o dividido en segmentos pequeños) debería tener la menor cantidad de código posible que se encargue de los side-effects, incluyendo entradas y salidas.
    -   El código que queda separado, debería poder ser lo suficientemente puro para hacer unit tests sin mucho boilerplate, e incluso usando herramientas como jsverify, que hace fuzz tests contra las funciones: [https://github.com/jsverify/jsverify](https://github.com/jsverify/jsverify)
- Explicación de incursión en 3D para cartas:
![](https://lh5.googleusercontent.com/wztXbx_d-9uRQrSz30785hp3hTVM8F_2aN51hiNtkPuXuG57tHC35WLUr9XJY_UMRNQYQk5_KsnijflZHWJf0PbRU8hAsl69vRJYw6ep5GavV73Q1ldxgX9f2hK7GqXK1PV9Bob6)

![](https://lh6.googleusercontent.com/-BgZEtC9wATp5z3-Mz_tArKxOnyyzf0wbNksHhHb3_4dxEZ10wduuhy9rXS1kgJNiY7Wv3w0FFeCOAhsCFfc01kAhyUhrYgDku8PVjAnnEWIIJTSQz2WN6jaDjNJQhAom7FvjqBl)

Recursos:
- [https://www.poliigon.com/texture/stone-bricks-beige-015](https://www.poliigon.com/texture/stone-bricks-beige-015)
- [https://sketchfab.com/3d-models/practice-sketch-01-a2015cbf9660486ba6d718931df027dc?ref=related](https://sketchfab.com/3d-models/practice-sketch-01-a2015cbf9660486ba6d718931df027dc?ref=related)
