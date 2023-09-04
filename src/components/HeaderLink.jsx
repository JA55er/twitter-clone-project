const HeaderLink = ({ link }) => {
  return (
    <div className='headerLinkContainer'>
      <a className='headerLinkAnchor'>
        <div className='headerLink'>
          <div className='headerLinkIcon'>{link.icon}</div>
          <span className='headerLinkLabel'>{link.label}</span>
        </div>
      </a>
    </div>
  );
};

export default HeaderLink;
