# Spike | ChartJS

## Requisitos previos

1. Node.js instalado en su sistema.
2. Un proyecto React configurado y listo para usar.

## Instalación 
Instala ambas librerías con este comando en la terminal.

```
npm install chart.js react-chartjs-2
```

## Gráfica de Barras
### Pasos:
1. Crear el archivo.tsx.

2. Entra a la siguiente liga y copia el código del App.tsx. Se explicará que hace cada parte en los siguientes pasos. 
- https://codesandbox.io/p/devbox/reactchartjs-react-chartjs-2-vertical-jebqk?embed=1&file=%2FApp.tsx

3. Importar varios componentes y objetos de las bibliotecas chart.js y react-chartjs-2.
```
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
```
4. Importa el componente Bar de la biblioteca react-chartjs-2.

``` 
import { Bar } from "react-chartjs-2"; 
```

5. Registramos los componentes necesarios de chart.js.

```
ChartJS.register(
CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
```

6.  Define un objeto de opciones para el gráfico de barras, lo cual afecta su comportamiento base.

```
export const options = {
    ...
}
```

7. Define un arreglo de etiquetas para el eje x del gráfico.

```
const labels = [ 
    ...
]
```

8. Esto define un objeto de datos que tendrá la grafica.

```
export const data = {
    ...
}
```

9. Define la función y lo renderiza.

```
function BarLayout() { 
    return <Bar options={options} data={data} />
}
```

10. Permite usarlo en otros archivos.

```
export default BarLayout;
```

11. Modifica los diferentes atributos atendiendo a tus necesidades. Aquí se encuentra la documentación de ambas librerías:
- https://www.chartjs.org/docs/latest/
- https://react-chartjs-2.js.org/

## Gráfica de Pie
### Pasos:
1. Crear el archivo.tsx.
2. Entra a la siguiente liga y copia el código del App.tsx. Se explicará que hace cada parte en los siguientes pasos. 
- https://codesandbox.io/p/devbox/reactchartjs-react-chartjs-2-default-ekh0k?embed=1&file=%2FApp.tsx

3. Importar varios componentes y objetos de las bibliotecas chart.js y react-chartjs-2.
```
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
```
4. Importa el componente Pie de la biblioteca react-chartjs-2.

``` 
import { Pie } from "react-chartjs-2";
```

5. Registramos lo componentes necesarios de chart.js.

```
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);
```

6.  Define un objeto de opciones para el gráfico de pie, lo cual afecta su comportamiento base.

```
export const options = {
    ...
}
```

7. Define un arreglo de etiquetas para el eje x del gráfico.

```
const labels = [ 
    ...
]
```

8. Esto define un objeto de datos que tendrá la grafica.

```
export const data = {
    ...
}
```

9. Define la función y lo renderiza.

```
function PieLayout() { 
    return <Pie options={options} data={data} />
}
```

10. Permite usarlo en otros archivos.

```
export default PierLayout;
```

11. Modifica los diferentes atributos atendiendo a tus necesidades. Aquí se encuentra la documentación de ambas librerías:
- https://www.chartjs.org/docs/latest/
- https://react-chartjs-2.js.org/

