import { NetUtilWrapper } from "./net_utils.mjs";

export class FaviconsWrapper {
  /**
   *
   * @param {string} url
   * @returns {string}
   */
  static getFaviconURLForPage(url) {
    // CORREÇÃO: A API antiga "Favicons.getFaviconURLForPage" foi removida.
    // A nova API usa PageIconProtocol.getFaviconURIForPage.
    // Ela também retorna um objeto URI, então precisamos pegar a propriedade .spec para obter a string da URL.
    try {
      const uri = NetUtilWrapper.newURI(url);
      // Retorna a URI do ícone da página, que pode então ser usada.
      return PageIconProtocol.getFaviconURIForPage(uri).spec;
    } catch (e) {
      console.error("FSS Error: Falha ao obter favicon para a URL:", url, e);
      // Retorna um valor padrão ou nulo em caso de erro.
      return "chrome://global/skin/icons/defaultFavicon.svg";
    }
  }
}