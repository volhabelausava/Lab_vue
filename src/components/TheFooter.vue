<template>
  <footer class="footer">
    <h3>Incredible convenient</h3>
    <ul>
      <li>
        <a href="https://www.playstation.com/" target="_blank" title="Sony">
          <img src="../assets/images/sony-logo.png" alt="Sony">
        </a>
      </li>
      <li>
        <a href="https://www.xbox.com/" target="_blank" title="Microsoft">
          <img src="../assets/images/microsoft-logo.png" alt="Microsoft">
        </a>
      </li>
      <li>
        <a href="https://www.nintendo.com/" target="_blank" title="Nintendo">
          <img src="../assets/images/nintendo-logo.png" alt="Nintendo">
        </a>
      </li>
      <li>
        <a href="https://www.tencent.com/" target="_blank" title="Tencent">
          <img src="../assets/images/tencent-logo.png" alt="Tencent">
        </a>
      </li>
      <li>
        <a href="https://www.activisionblizzard.com/" target="_blank" title="Activision Blizzard">
          <img src="../assets/images/activision-blizzard-logo.svg" alt="Activision Blizzard">
        </a>
      </li>
      <li>
        <a href="https://www.ea.com/" target="_blank" title="Electronic Arts">
          <img src="../assets/images/electronic-arts-logo.png" alt="Electronic Arts">
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  background-color: #121211;
  color: #E2E2E2;
  align-items: center;

  h3 {
    margin: 15px 20px;
    font-style: italic;
  }

  ul {
    list-style-type: none;
    text-align: left;

    li {
      display: inline-block;
      height: 20px;
      margin: 20px;

      a {
        height: 100%;
        padding-bottom: 5px;
        border-bottom: solid 2px #121211;

        &:hover {
          border-bottom: solid 2px #9D5DCD;
        }

        &:focus {
          outline: none;
          border-bottom: solid 2px #9D5DCD;
        }

        img {
          height: 100%;
        }
      }
    }
  }
}
</style>
