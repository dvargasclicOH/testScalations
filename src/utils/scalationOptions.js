export const supplyOptions = [
  {
    label: "Bonificaciones",
    value: "Bonificaciones",
    sn: "supply.bonificaciones",
    ts: "intern",
    qss: "67dac9a5a6853fb9d58a1d76", // este puede depender del país
    sla: "24",
    unit: "h"
  },
  {
    label: "Confirmación de pagos por disponibilidad",
    value: "Confirmación de pagos por disponibilidad",
    sn: "supply.confirmacion_pagos_disponibilidad",
    ts: "intern",
    qss: "67dac9bbe5c1803212d91129",
    sla: "24",
    unit: "h"
  }
  // Puedes agregar más escalations aquí...
];

// Si vas a manejar más formularios, puedes exportar también:
export const operacionesOptions = [
  {
    label: "Demora en retiro",
    value: "Demora en retiro",
    sn: "operaciones.demora_retiro",
    ts: "extern",
    qss: "ID_DE_EJEMPLO",
    sla: "12",
    unit: "h"
  }
];