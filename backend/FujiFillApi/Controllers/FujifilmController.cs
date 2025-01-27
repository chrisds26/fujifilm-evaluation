using DataLayer.Usuario;
using FujiFillApi.Core.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Object.producto;
using Object.usuario;

namespace FujiFillApi.Controllers
{
    [ApiController]
    [Route("api/Fujifilm")]
    public class FujifilmController : Controller
    {
        private readonly IResponseToken _responseToken;
        public FujifilmController(IResponseToken responseToken)
        {
            _responseToken = responseToken;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(UsuarioObj usr)
        {
            var response = await _responseToken.ValidaAcceso();
            var resp = new LoginDa().LoginUsuario(usr);
            resp.Token = response;
            return Ok(resp);
        }

        [HttpGet]
        [Route("getProducto")]
        [Authorize]
        public IActionResult getProducto()
        {
            return Ok(new LoginDa().GetProducto());
        }

        [HttpPost]
        [Route("InsertProducto")]
        public IActionResult InsertProducto(ProductoObj producto)
        {
            return Ok(new LoginDa().InsertProducto(producto));
        }

        [HttpPost]
        [Route("EditProducto")]
        public IActionResult EditProducto(ProductoObj producto)
        {
            return Ok(new LoginDa().EditProducto(producto));
        }

        [HttpPost]
        [Route("DeleteProducto")]
        public IActionResult DeleteProducto(ProductoObj producto)
        {
            return Ok(new LoginDa().DeleteProducto(producto));
        }
    }
}
