import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Avatar } from 'primereact/avatar';
// eslint-disable-next-line
import { Button } from 'primereact/button';
function App() {
  const colors = {
    twitter: 'lightblue',
    facebook: 'darkblue',
    github: 'black',
  };
  const data = {
    name: 'Mohamed Benabdellah',
    image: 'http://github.com/pooreffects.png',
    bio: 'Frontend Developer, a software engineering fanatic day-to-day.',
    links: [
      {
        name: 'My Github',
        url: 'http://github.com/pooreffects',
        icon: 'github',
      },
      {
        name: 'My Twitter',
        url: 'http://twitter.com/pooreffects',
        icon: 'twitter',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/moh.twistev/',
        icon: 'facebook',
      },
    ],
  };
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 className="p-m-2">{data.name}</h1>
        <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
          <p>{data.bio}</p>
        </div>
        <div className="p-d-flex  p-jc-center p-ai-center">
          <div className="p-d-flex p-flex-column">
            {data.links.map((link) => (
              <Button
                className="p-m-2 p-button-raised p-button-secondary p-button-rounded  "
                style={{ color: colors[link.icon] }}
              >
                <i className={`pi pi-${link.icon} p-px-3`}></i>
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
