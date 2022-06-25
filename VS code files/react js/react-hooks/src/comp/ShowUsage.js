import { useState } from 'react';
const ShowUsage = ({ usages, para }) => {
  const [usage, setUsage] = useState(false);

  return (
    <div className="usage">
      <br />
      <button
        onClick={() => {
          setUsage((usage) => !usage);
        }}
      >
        click to {usage ? 'hide' : 'see'} usage
      </button>

      {usage && (
        <>
          <ul>
            {usages.map((item) => (
              <li>{item} </li>
            ))}
          </ul>
          <p>{para}</p>
        </>
      )}
    </div>
  );
};

export default ShowUsage;
