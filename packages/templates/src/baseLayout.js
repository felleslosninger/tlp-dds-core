const createBaseLayout = ({ content = '' }) => {
  return String.raw`
  <div class="dads-topbar">
  </div>

  <div class="dads-sidebar">
    <div class="dads-sidebar__header">

      <div class="dads-sidebar__header__logo">
        <svg class="dads-sidebar__header__logo__icon" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.478 0H0.492424C0.362615 0.00252128 0.238824 0.0552112 0.147018 0.147018C0.0552112 0.238824 0.00252128 0.362615 0 0.492424V23.8727C0.00252128 24.0025 0.0552112 24.1263 0.147018 24.2181C0.238824 24.3099 0.362615 24.3626 0.492424 24.3652H12.478C15.709 24.3652 18.8077 23.0816 21.0924 20.797C23.3771 18.5123 24.6606 15.4136 24.6606 12.1826C24.6606 8.95156 23.3771 5.85287 21.0924 3.56819C18.8077 1.28352 15.709 4.81459e-08 12.478 0ZM13.65 20.6818C11.8366 20.9939 9.97084 20.7207 8.32302 19.9018C6.67519 19.0828 5.33079 17.7607 4.48448 16.1267C3.63817 14.4928 3.33387 12.6319 3.61566 10.8135C3.89745 8.99512 4.7507 7.3136 6.05185 6.01245C7.353 4.7113 9.03451 3.85806 10.8529 3.57627C12.6713 3.29448 14.5322 3.59877 16.1661 4.44508C17.8001 5.2914 19.1222 6.6358 19.9412 8.28363C20.7601 9.93145 21.0333 11.7972 20.7212 13.6106C20.4175 15.3754 19.5746 17.0027 18.3084 18.269C17.0421 19.5352 15.4148 20.3781 13.65 20.6818"/>
        </svg>
        
        <span class="dads-sidebar__header__logo__label">
          Digdir
        </span>
      </div>



      <div class="dads-sidebar__header__handle">
      <button class="dads-icon-button">
        <svg class="dads-icon-button__icon" viewBox="0 0 88 75" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.8125 7.03125C56.8359 6.05469 55.2734 6.05469 54.4922 7.03125L50.5859 10.9375C49.6094 11.7188 49.6094 13.2812 50.5859 14.2578L69.5312 32.6172H21.0938C19.7266 32.6172 18.75 33.5938 18.75 34.9609V40.4297C18.75 41.6016 19.7266 42.7734 21.0938 42.7734H69.5312L50.5859 60.9375C49.6094 61.9141 49.6094 63.4766 50.5859 64.2578L54.4922 68.1641C55.2734 69.1406 56.8359 69.1406 57.8125 68.1641L86.7188 39.2578C87.6953 38.2812 87.6953 36.9141 86.7188 35.9375L57.8125 7.03125ZM10.1562 72.6562V2.34375C10.1562 1.17188 8.98438 0 7.8125 0H2.34375C0.976562 0 0 1.17188 0 2.34375V72.6562C0 74.0234 0.976562 75 2.34375 75H7.8125C8.98438 75 10.1562 74.0234 10.1562 72.6562Z"></path>
        </svg>
      </button>
      </div>

    </div>
  </div>

  <main class="dads-content-container">
    ${content}
  </main>`
}

export { createBaseLayout }
