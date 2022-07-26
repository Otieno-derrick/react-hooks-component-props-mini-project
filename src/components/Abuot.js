import React from 'react';

function Abuot({about, image="https://via.placeholder.com/215 "}) {
  return (
    <div>
      <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
      </aside>
    </div>
  );
}

export default Abuot;