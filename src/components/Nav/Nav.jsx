import './Nav.scss';
export default function Nav() {
  function drawMenu(e) {
    e.stopPropagation();
    const drawerElement = document.querySelector('#drawer-menu');
    drawerElement.setAttribute(
      'data-menu-hidden',
      !(drawerElement.getAttribute('data-menu-hidden') === 'true')
    );
  }
  return (
    <>
      <nav className='nav'>
        <a href='/' title='Home' rel='prefetch' className='logo gradient-box'>
          PS.<i>Design</i>
        </a>
        <button
          id='nav-drawer'
          className='gradient-box'
          onClick={(e) => drawMenu(e)}
        >
          <svg viewBox='0 0 24 17' width='24' height='17'>
            <line y1='0.5' x2='24' y2='0.5' stroke='currentColor'></line>
            <line y1='8.5' x2='24' y2='8.5' stroke='currentColor'></line>
            <line y1='16.5' x2='24' y2='16.5' stroke='currentColor'></line>
          </svg>
        </button>
      </nav>

      <div
        id='drawer-menu'
        data-menu-hidden='true'
        onClick={(e) => drawMenu(e)}
      >
        <i className='close-button' onClick={(e) => drawMenu(e)}></i>
        <a href='/' title='Home' rel='prefetch' className='logo'>
          PS.<i>Design</i>
        </a>
        <ul>
          <li>
            <a href='#savoir-faire'>Savoir faire</a>
          </li>
          <li>
            <a href='#objectifs'>Nos objectifs</a>
          </li>
          <li>
            <a href='#contact'>Nous contacter</a>
          </li>
          <li>
            <a href='#price'>Nos prix</a>
          </li>
        </ul>
      </div>
    </>
  );
}
