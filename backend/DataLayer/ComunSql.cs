using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class ComunSql
    {
        private SqlCommand comm = new SqlCommand();
        private SqlConnection conn;

        public enum tipoTransaccion 
        {
            text = 0,
            sp = 1
        }

        public void getDb()
        {
            conn = new SqlConnection("Data Source=DESKTOP-H311SV9\\IPN;Database=FUJIFILM;Integrated Security=SSPI");
        }

        public bool crearComando(tipoTransaccion tipo, string consulta)
        {
            try
            {
                if(tipo == tipoTransaccion.text) 
                    comm.CommandType = System.Data.CommandType.Text;
                else
                    comm.CommandType= System.Data.CommandType.StoredProcedure;

                comm.CommandText = consulta;
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool crearParametro(ParameterDirection tParametro, SqlDbType dParametro, string variable, string value)
        {
            try
            {
                if(tParametro == ParameterDirection.Input) 
                {
                    SqlParameter p = new SqlParameter();
                    p.Direction = ParameterDirection.Input;
                    p.SqlDbType = dParametro;
                    p.ParameterName = variable;
                    p.Value = value;

                    comm.Parameters.Add(p);
                }
                comm.CommandTimeout = 60;
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public DataSet ejecutarComando()
        {
            SqlDataAdapter dt;
            DataSet dts = new DataSet();

            try
            {
                comm.Connection = conn;
                comm.CommandTimeout = 0;
                dt = new SqlDataAdapter(comm);
                dt.Fill(dts);
                return dts;
            }
            catch (Exception)
            {

                return null;
            }
        }

        public int ejecutarComandoCrud()
        {
            try
            {
                int row = 0;
                comm.Connection = conn;
                comm.CommandTimeout = 0;
                conn.Open();
                row = comm.ExecuteNonQuery();
                conn.Close();
                
                return row;
            }
            catch (Exception ex)
            {

                return -1;
            }
            finally
            {
                if (conn != null)
                {
                    conn.Close();
                }
            }
        }
    }
}
