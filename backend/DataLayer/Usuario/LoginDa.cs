using Object.producto;
using Object.usuario;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Usuario
{
    public class LoginDa:ComunSql
    {
        public UsuarioObj LoginUsuario(UsuarioObj usr)
        {
      
			try
			{
                getDb();
                crearComando(tipoTransaccion.sp, "sp_login");
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "Usuario", usr.Nombre);
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "Contrasena", usr.Contrasena);
                var dts = ejecutarComando().Tables[0];

                UsuarioObj usrs = new UsuarioObj();

                foreach (DataRow dr in dts.Rows) 
                {
                    usrs.Nombre = dr["Nombre"].ToString();
                    usrs.Contrasena = dr["Contrasena"].ToString();
                    usrs.IdUsuario = Convert.ToInt32(dr["IdUsuario"]);
                }
                return usrs;
            }
			catch (Exception)
			{

				throw;
			}
        }

        public List<ProductoObj> GetProducto()
        {
            List<ProductoObj> lstProductos = new List<ProductoObj>();
            try
            {
                getDb();
                crearComando(tipoTransaccion.sp, "sp_getProducto");
 
                var dts = ejecutarComando().Tables[0];

                

                foreach (DataRow dr in dts.Rows)
                {
                    ProductoObj product = new ProductoObj();
                    product.IdProducto = Convert.ToInt32(dr["IdProducto"]);
                    product.CodigoProducto = dr["CodigoProducto"].ToString();
                    product.NombreProducto = dr["NombreProducto"].ToString();
                    product.Precio = Convert.ToDecimal(dr["Precio"]);
                    product.IdUsuario = Convert.ToInt32(dr["IdUsuario"]);
                    product.Estatus = Convert.ToBoolean(dr["Estatus"]);
                    product.TipoProducto = dr["TipoProducto"].ToString();
                    lstProductos.Add(product);
                }
                return lstProductos;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int InsertProducto(ProductoObj producto)
        {
            List<ProductoObj> lstProductos = new List<ProductoObj>();
            try
            {
                getDb();
                crearComando(tipoTransaccion.sp, "sp_insertProducto");
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "CodigoProducto", producto.CodigoProducto);
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "NombreProducto", producto.NombreProducto);
                crearParametro(ParameterDirection.Input, SqlDbType.Decimal, "Precio", producto.Precio.ToString());
                crearParametro(ParameterDirection.Input, SqlDbType.Int, "IdUsuario", producto.IdUsuario.ToString());
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "TipoProducto", producto.TipoProducto);
                

                var dts = ejecutarComandoCrud();
                return dts;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int EditProducto(ProductoObj producto)
        {
            List<ProductoObj> lstProductos = new List<ProductoObj>();
            try
            {
                getDb();
                crearComando(tipoTransaccion.sp, "sp_updateProducto");
                crearParametro(ParameterDirection.Input, SqlDbType.Int, "IdProducto", producto.IdProducto.ToString());
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "CodigoProducto", producto.CodigoProducto);
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "NombreProducto", producto.NombreProducto);
                crearParametro(ParameterDirection.Input, SqlDbType.Decimal, "Precio", producto.Precio.ToString());
                crearParametro(ParameterDirection.Input, SqlDbType.NVarChar, "TipoProducto", producto.TipoProducto);


                var dts = ejecutarComandoCrud();
                return dts;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int DeleteProducto(ProductoObj producto)
        {
            List<ProductoObj> lstProductos = new List<ProductoObj>();
            try
            {
                getDb();
                crearComando(tipoTransaccion.sp, "sp_deleteProducto");
                crearParametro(ParameterDirection.Input, SqlDbType.Int, "IdProducto", producto.IdProducto.ToString());


                var dts = ejecutarComandoCrud();
                return dts;
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
