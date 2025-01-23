using DataLayer.Usuario;
using Microsoft.AspNetCore.Mvc;
using Object.producto;
using Object.usuario;

namespace FujiFillApi.Controllers
{
    [ApiController]
    [Route("api/Fujifilm")]
    public class FujifilmController : Controller
    {
        [HttpPost]
        [Route("login")]
        public IActionResult Login(UsuarioObj usr)
        {
            return Ok(new LoginDa().LoginUsuario(usr));
        }

        [HttpGet]
        [Route("getProducto")]
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
