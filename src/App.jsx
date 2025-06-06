import { useEffect, useState } from "react";
import FormSupply from "./components/FormSupply";
import FormOperaciones from "./components/FormOperaciones";
import { forms } from "./utils/formsConfig";

export default function App() {
  const [context, setContext] = useState(null);
  const [form, setForm] = useState("");
  const [state, setState] = useState({
    country: "",
    scalationReason: "",
    scalationReasonId: "",
    description: "",
    attachments: [],
  });

  const setField = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const removeAttachmentFile = (fileName) => {
    setState(prev => ({
      ...prev,
      attachments: prev.attachments.filter(file => file.name !== file.name)
    }));
  };

  useEffect(() => {
    if (window.Kustomer) {
      window.Kustomer.getContext().then((ctx) => {
        console.log("Contexto Kustomer recibido:", ctx);
        setContext(ctx);
      });
    }
  }, []);

  if (!context) return <p>Cargando contexto...</p>;

  const currentTeam = context?.currentUser?.team?.name;

  const availableForms = forms.filter(f => f.teamsAuthorized.includes(currentTeam));

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Formularios disponibles para {currentTeam}</h2>
      <select onChange={(e) => setForm(e.target.value)} value={form}>
        <option value="">Selecciona un formulario</option>
        {availableForms.map(f => (
          <option key={f.form} value={f.form}>{f.form}</option>
        ))}
      </select>

      {form === "Supply" && (
        <FormSupply state={state} setField={setField} removeAttachmentFile={removeAttachmentFile} />
      )}
      {form === "Operaciones" && (
        <FormOperaciones state={state} setField={setField} removeAttachmentFile={removeAttachmentFile} />
      )}
    </div>
  );
}