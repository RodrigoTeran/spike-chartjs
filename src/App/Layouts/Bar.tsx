import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Ejemplo de Gráfica de Barras",
        },
    },
};

const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio"
];

export const data = {
    labels,
    datasets: [
        {
            label: "Serie 1",
            data: labels.map(() => Math.random() * 100),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Serie 2",
            data: labels.map(() => Math.random() * 100),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};


function BarLayout() {
    return <Bar options={options} data={data} />
}

export default BarLayout;