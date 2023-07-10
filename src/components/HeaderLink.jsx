const HeaderLink = ({ link }) => {
  console.log(link);
  return (
    <div className='headerLink'>
      <div className='headerLinkContainer'>
        <img className='headerLinkIcon' src={link.icon} />
        <span className='headerLinkLabel'>{link.label}</span>
      </div>
    </div>
  );
};

export default HeaderLink;
