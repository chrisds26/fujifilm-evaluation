using DataLayer.Usuario;
using Object.producto;
using Object.usuario;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Usuario
{
    public class LoginBa
    {
        public UsuarioObj login(UsuarioObj usr) 
        {
			try
			{
				// var dtResult =
				var result = new LoginDa().LoginUsuario(usr);
				return result;
			}
			catch (Exception)
			{

				throw;
			}
        }

        public List<ProductoObj> getProducto()
        {
            try
            {
                var result = new LoginDa().GetProducto();
                return result;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int insertProducto(ProductoObj producto)
        {
            try
            {
                var result = new LoginDa().InsertProducto(producto);
                return result;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int editProducto(ProductoObj producto)
        {
            try
            {
                var result = new LoginDa().EditProducto(producto);
                return result;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int deleteProducto(ProductoObj producto)
        {
            try
            {
                var result = new LoginDa().DeleteProducto(producto);
                return result;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
