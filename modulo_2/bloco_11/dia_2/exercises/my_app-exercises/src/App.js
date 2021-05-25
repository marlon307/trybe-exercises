import './App.css';
import data from './data';

function App() {
  return (
    <ul className='list'>
      {data.map(
        ({
          id,
          name,
          type,
          averageWeight: { value, measurementUnit },
          image,
          moreInfo,
        }) => (
          <li className='card' key={id}>
            <a
              className='link'
              href={moreInfo}
              target='_blank'
              rel='noreferrer'
            >
              <div className='desc'>
                <p>{name}</p>
                <p>{type}</p>
                <span>
                  Average weight: {value} {measurementUnit}
                </span>
              </div>
              <img
                className='image'
                src={image}
                alt={name}
                title='Abrir em uma nova guia a descrição completa'
              />
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export default App;
