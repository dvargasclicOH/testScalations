import SharedFields from "./SharedFields";
import { supplyOptions } from "../utils/scalationOptions";
import { supplyFieldMap } from "../utils/fieldConfigMap";

export default function FormSupply({ state, setField, removeAttachmentFile }) {
  const handleSelectChange = (e) => {
    const option = e.target.selectedOptions[0];
    setField("scalationReason", e.target.value);
    setField("scalationReasonId", option.dataset.sn);
  };

  return (
    <form>
      <h3>Supply</h3>
      <select value={state.scalationReason} onChange={handleSelectChange} required>
        <option hidden value=""> - </option>
        {supplyOptions.map(opt => (
          <option key={opt.value} value={opt.value} data-sn={opt.sn}>
            {opt.label}
          </option>
        ))}
      </select>

      {supplyFieldMap[state.scalationReasonId]?.map(field => (
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
