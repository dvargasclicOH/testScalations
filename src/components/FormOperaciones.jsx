import SharedFields from "./SharedFields";
import { operacionesOptions } from "../utils/scalationOptions";
import { OperacionesFieldMap } from "../utils/fieldConfigMap";

export default function FormOperaciones({ state, setField, removeAttachmentFile }) {
  const handleSelectChange = (e) => {
    const option = e.target.selectedOptions[0];
    setField("scalationReason", e.target.value);
    setField("scalationReasonId", option.dataset.sn);
  };

  return (
    <form>
      <h3>Operciones</h3>
      <select value={state.scalationReason} onChange={handleSelectChange} required>
        <option hidden value=""> - </option>
        {operacionesOptions.map(opt => (
          <option key={opt.value} value={opt.value} data-sn={opt.sn}>
            {opt.label}
          </option>
        ))}
      </select>

      {OperacionesFieldMap[state.scalationReasonId]?.map(field => (
        <div key={field.field}>
          <p>{field.label}</p>
          <input
            type="text"
            value={state[field.field] || ""}
            onChange={e => setField(field.field, e.target.value)}
            required
          />
        </div>
      ))}

      <SharedFields
        description={state.description}
        attachments={state.attachments}
        setField={setField}
        removeAttachmentFile={removeAttachmentFile}
      />
    </form>
  );
}
