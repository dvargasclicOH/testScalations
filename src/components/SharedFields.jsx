export default function SharedFields({ description, attachments, setField, removeAttachmentFile }) {
  return (
    <>
      <p>Comentarios adicionales</p>
      <textarea
        value={description}
        onChange={e => setField("description", e.target.value)}
        onPaste={e => {
          if (!e.clipboardData.getData("Text")) {
            setField("attachments", e.clipboardData.files[0]);
          }
        }}
      />
      <input
        id="attachments"
        multiple
        type="file"
        hidden
        onChange={e => setField("attachments", e.target.files[0])}
      />
      <label htmlFor="attachments">Adjunto</label>

      {attachments.length > 0 && (
        <ul>
          {attachments.map(file => (
            <li key={file.name}>
              {file.name}
              <button type="button" onClick={() => removeAttachmentFile(file.name)}>❌</button>
            </li>
          ))}
        </ul>
      )}

      <button type="submit">Enviar</button>
    </>
  );
}
