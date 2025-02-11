/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import React, { useContext, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Header, LoginHeader } from "../../components/Header";
import UserContext from "../../context/User";
import Analytics from "../../utils/analytics";
import useStyle from "./styles";

function Terms() {
  useEffect(async () => {
    await Analytics.track(Analytics.events.NAVIGATE_TO_TERMS);
  }, []);
  const classes = useStyle();
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Grid className={classes.root}>
      {isLoggedIn ? <Header /> : <LoginHeader showIcon />}
      <Grid container className={classes.mainContainer}>
        <Box className={classes.imageContainer}>
          <Typography variant="h4" color="textPrimary" align="center" className={classes.title}>
            TÉRMINOS Y CONDICIONES | Dinos
          </Typography>
        </Box>
        <Grid container item xs={12} className={classes.mainContainer}>
          <Grid item xs={1} md={1} />
          <Grid container item xs={10} sm={10} md={9}>
            <ol className={classes.boldText}>
              <Typography variant="subtitle2" className={classes.MV3}>
                Publicado: 2021
              </Typography>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  TÉRMINOS DE USO
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Estos Términos de Uso (“<b>Términos</b>”) rigen tu uso de los sitios web y aplicaciones móviles
                  proporcionados por Dino's Pedidos (colectivamente, las “<b>Plataformas</b>”). Por favor, lee estos Términos
                  cuidadosamente. Al acceder y usar las Plataformas, aceptas que has leído, entendido y aceptado los
                  Términos, incluyendo cualquier término y condición adicional y cualquier política referenciada
                  aquí, disponible en las Plataformas o disponible mediante hipervínculo. Si no estás de acuerdo o no
                  cumples con los Términos, por favor no uses las Plataformas.
                </Typography>
                <Typography variant="subtitle2">
                  Las Plataformas pueden ser utilizadas por (i) personas naturales que hayan alcanzado los 18 años de
                  edad y (ii) entidades legales corporativas, por ejemplo, empresas. Cuando sea aplicable, estos
                  Términos estarán sujetos a disposiciones específicas por país, como se establece aquí.
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Los usuarios menores de 18 años deben obtener el consentimiento de sus padres o tutores legales, quienes,
                  al aceptar estos Términos, aceptarán asumir la responsabilidad por tus acciones y cualquier cargo
                  asociado con tu uso de las Plataformas y/o la compra de Bienes. Si no tienes el consentimiento de tus
                  padres o tutores legales, debes dejar de usar/acceder a las Plataformas inmediatamente.
                </Typography>
                <Typography variant="subtitle2">
                  Dino's Pedidos se reserva el derecho de cambiar o modificar estos Términos (incluyendo nuestras políticas
                  que se incorporan a estos Términos) en cualquier momento. Se recomienda encarecidamente leer estos
                  Términos regularmente. Se considerará que has aceptado los Términos modificados al continuar usando
                  las Plataformas después de la fecha en que se publiquen los Términos modificados.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Dino's Pedidos
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">Lo que hacemos</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      A través de nuestras Plataformas, Dino's Pedidos te conecta con los proveedores (“<b>Proveedores</b>”)
                      para que puedas pedir una variedad de bienes, incluyendo comidas preparadas, alimentos no
                      preparados y artículos varios no alimentarios (en adelante, colectivamente denominados “
                      <b>Bienes</b>”) para que te sean entregados. Cuando realizas un pedido de Bienes a nuestros
                      Proveedores (“<b>Pedido</b>”), Dino's Pedidos actúa como agente en nombre de ese Proveedor para
                      facilitar, procesar y concluir el pedido y, posteriormente, para que nosotros o el Proveedor
                      entreguen tu Pedido. Los Proveedores pueden ser propiedad y estar operados por terceros,
                      empresas afiliadas o por nosotros.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Cómo contactarnos</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Para soporte al cliente, puedes contactarnos por correo electrónico o a través de nuestra función
                      de chat de soporte al cliente en la aplicación.{" "}
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={clsx(classes.boldText, classes.MV3)}>
                  Uso de las Plataformas y Cuenta de Dino's Pedidos
                </Typography>
                <Typography variant="subtitle2">
                  Necesitarás registrarte para una cuenta de Dino's Pedidos para poder usar la Plataforma. Cuando te registras
                  para una cuenta de Dino's Pedidos, te pediremos que proporciones tu información personal, incluyendo una
                  dirección de correo electrónico válida, un número de teléfono móvil y una contraseña única. Para
                  comprar un Pedido, dependiendo del método de pago que elijas, es posible que necesites proporcionarnos
                  los detalles de tu tarjeta de crédito. Tu contraseña única no debe ser compartida con nadie y aceptas
                  mantenerla en secreto en todo momento. Eres el único responsable de mantener tu contraseña segura.
                  Excepto en casos de fraude o abuso que no sean tu culpa, aceptas que todos los Pedidos realizados bajo
                  tu cuenta de Dino's Pedidos son de tu exclusiva responsabilidad.
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Dino's Pedidos no será responsable de los Pedidos que encuentren problemas de entrega debido a información
                  incompleta, incorrecta o faltante proporcionada por ti. Estás obligado a proporcionar información
                  completa, precisa y veraz para el procesamiento adecuado del Pedido, incluyendo tu dirección de
                  entrega y información de contacto.
                </Typography>
                <Typography variant="subtitle2">
                  Si deseas eliminar tu cuenta de Dino's Pedidos, por favor envíanos un correo electrónico solicitándolo.
                  Podemos restringir, suspender o terminar tu cuenta de Dino's Pedidos y/o el uso de las Plataformas, si
                  razonablemente creemos que:
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  alguien que no seas tú está usando tu cuenta de Dino's Pedidos; o
                </Typography>
                <Typography variant="subtitle2">
                  si se sospecha o descubre que has estado involucrado en cualquier actividad o conducta que incumpla
                  estos Términos, nuestras políticas y pautas, o involucrado en una actividad o conducta que, a nuestra
                  exclusiva discreción, consideremos un abuso de las Plataformas.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={clsx(classes.boldText, classes.MV3)}>
                  Restricciones
                </Typography>
                <Typography variant="subtitle2">Actividades Prohibidas en las Plataformas</Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Al procesar tu pedido, podemos enviar tu información a agencias de referencia crediticia y prevención
                  de fraude.
                </Typography>
                <Typography variant="subtitle2">
                  La siguiente es una lista no exhaustiva de los tipos de conducta que son ilegales o prohibidos en las
                  Plataformas. Dino's Pedidos se reserva el derecho de investigar y tomar las medidas legales correspondientes
                  contra cualquier persona que, a exclusiva discreción de Dino's Pedidos, participe en cualquiera de las
                  actividades prohibidas. Las actividades prohibidas incluyen, pero no se limitan a lo siguiente:
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">
                      usar las Plataformas para cualquier propósito que viole las leyes o regulaciones locales,
                      estatales o federales;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar cualquier contenido que infrinja los derechos de propiedad intelectual, derechos de
                      privacidad, derechos de publicidad, derechos de secretos comerciales o cualquier otro derecho de
                      cualquier parte;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar contenido que sea ilegal, obsceno, difamatorio, amenazante, acosador, abusivo,
                      calumnioso, odioso o embarazoso para cualquier otra persona o entidad, según lo determine Dino's Pedidos
                      a su exclusiva discreción o de acuerdo con los estándares de la comunidad local;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar contenido que constituya ciberacoso, según lo determine Dino's Pedidos a su exclusiva
                      discreción;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar contenido que represente cualquier comportamiento peligroso, que ponga en riesgo la vida
                      o que sea de otro modo riesgoso;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar números de teléfono, direcciones físicas o apellidos de cualquier persona;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar URL a sitios web externos o cualquier forma de código HTML o de programación;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      publicar cualquier cosa que pueda ser considerada “spam”, según lo determine Dino's Pedidos a su
                      exclusiva discreción;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">suplantar a otra persona al publicar contenido;</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      recolectar información sobre otros, incluyendo direcciones de correo electrónico, sin su
                      consentimiento;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      permitir que cualquier otra persona o entidad use tu identificación para publicar o ver comentarios;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      acosar, amenazar, acechar o abusar de cualquier persona en las Plataformas;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      participar en cualquier otra conducta que restrinja o inhiba a cualquier otra persona de usar o
                      disfrutar de los Sitios Web, o que, a exclusiva discreción de Dino's Pedidos, exponga a Dino's Pedidos o a
                      cualquiera de sus clientes, proveedores o cualquier otra parte a cualquier responsabilidad o
                      perjuicio de cualquier tipo; o
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      alentar a otras personas a participar en cualquier actividad prohibida descrita aquí.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Dino's Pedidos se reserva el derecho, pero no la obligación, de hacer cualquiera o todos los siguientes:
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      investigar una denuncia de que cualquier contenido publicado en las Plataformas no cumple con
                      estos Términos y determinar, a su exclusiva discreción, eliminar o solicitar la eliminación del
                      contenido;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      eliminar contenido que sea abusivo, ilegal o disruptivo, o que de otro modo no cumpla con estos
                      Términos;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      suspender o terminar el acceso de un usuario a las Plataformas o a su cuenta de Dino's Pedidos ante
                      cualquier incumplimiento de estos Términos;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      monitorear, editar o divulgar cualquier contenido en las Plataformas; y
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      editar o eliminar cualquier contenido publicado en las Plataformas, independientemente de si dicho
                      contenido viola estos estándares.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Propiedad Intelectual
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Todas las marcas registradas, logotipos, imágenes y marcas de servicio, incluidos estos Términos
                  según se muestran en las Plataformas o en nuestro material de marketing, ya sean registrados o no, son
                  propiedad intelectual de Dino's Pedidos y/o terceros que nos han autorizado su uso (colectivamente, las “
                  <b>Marcas Registradas</b>”). No puedes usar, copiar, reproducir, volver a publicar, cargar, publicar,
                  transmitir, distribuir o modificar estas Marcas Registradas de ninguna manera sin nuestro
                  consentimiento expreso por escrito previo. El uso de las marcas registradas de Dino's Pedidos en cualquier
                  otro sitio web no aprobado por nosotros está estrictamente prohibido. Dino's Pedidos hará cumplir
                  agresivamente sus derechos de propiedad intelectual hasta el máximo alcance de la ley, incluyendo el
                  enjuiciamiento penal. Dino's Pedidos no garantiza ni representa que tu uso de los materiales mostrados en las
                  Plataformas no infringirá los derechos de terceros no propiedad de o afiliados a Dino's Pedidos. El uso de
                  cualquier material en las Plataformas es bajo tu propio riesgo.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Restricciones sobre los Bienes
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">
                      Algunos de los Bienes que ofrecemos en nuestras Plataformas están sujetos a restricciones para su
                      compra (“<b>Bienes Restringidos</b>”)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Alcohol / Productos Alcohólicos (“<b>Alcohol</b>”){" "}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Para comprar Alcohol, debes tener la edad legal requerida. Dino's Pedidos, el Proveedor y sus
                      repartidores, según corresponda, se reservan el derecho a su exclusiva discreción:
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      solicitar una prueba de edad válida (por ejemplo, una identificación) a cualquier persona antes de
                      entregar Alcohol;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      rechazar la entrega si no puedes demostrar que tienes la edad legal; y/o
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      rechazar la entrega a cualquier persona por cualquier motivo.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Cigarrillos/Productos de Tabaco (“<b>Tabaco</b>”)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Podemos ofrecer Tabaco en algunas de nuestras Plataformas donde las leyes lo permitan. Al ofrecer
                      Tabaco a la venta en nuestras Plataformas, no pretendemos anunciar, promover o fomentar la compra
                      o el uso de Tabaco de ninguna manera.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Para comprar Tabaco, debes tener la edad legal requerida. Dino's Pedidos, el Proveedor y sus
                      repartidores, según corresponda, se reservan el derecho a su exclusiva discreción:
                    </Typography>
                    <ul className={classes.circle}>
                      <li>
                        <Typography variant="subtitle2">
                          solicitar una prueba de edad válida (por ejemplo, una identificación) a cualquier persona antes
                          de entregar Tabaco;
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">
                          rechazar la entrega si no puedes demostrar que tienes la edad legal; y/o
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">
                          rechazar la entrega a cualquier persona por cualquier motivo.
                        </Typography>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Cualquier oferta de Alcohol y Tabaco realizada en las Plataformas será nula cuando esté prohibida
                      por la ley.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Pedidos
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">
                      Cuando realizas un Pedido con Dino's Pedidos, Dino's Pedidos confirmará tu pedido enviándote un correo
                      electrónico de confirmación que contiene el recibo del Pedido. Cuando sea aplicable, los Pedidos
                      incluirán gastos de envío y cualquier impuesto aplicable (por ejemplo, impuesto sobre bienes y
                      servicios, impuesto al valor agregado, etc.).
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Valor Mínimo del Pedido: Algunos de nuestros Proveedores requieren un valor mínimo de pedido (“
                      <b>MOV</b>”) antes de que se pueda realizar y entregar un Pedido. Cuando un Pedido aplicable no
                      cumple con el MOV, tendrás la opción de pagar la diferencia para alcanzar el MOV o agregar más
                      Bienes a tu Pedido.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Instrucciones Especiales: Dino's Pedidos y el Proveedor (según corresponda) harán esfuerzos razonables
                      para cumplir con tus instrucciones especiales para un Pedido. Sin embargo, en algunos casos en los
                      que esto no sea factible, posible o comercialmente razonable, Dino's Pedidos y/o el Proveedor se reservan
                      el derecho de proceder a preparar el Pedido de acuerdo con los procedimientos operativos estándar.
                      Ni Dino's Pedidos ni el Proveedor serán responsables de reemplazar o reembolsar un Pedido que no cumpla
                      con las instrucciones especiales proporcionadas por ti.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Alérgenos: Dino's Pedidos no está obligado a proporcionar información sobre ingredientes o alérgenos en
                      las Plataformas. Además, Dino's Pedidos no garantiza que los Bienes vendidos por los Proveedores estén
                      libres de alérgenos. Si tienes alergias, reacciones alérgicas o restricciones y requisitos
                      dietéticos, por favor contacta al Proveedor antes de realizar un Pedido en nuestras Plataformas.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Ten en cuenta que tu Pedido puede estar sujeto a términos y condiciones adicionales proporcionados
                      por el Proveedor.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Antes de realizar el Pedido</Typography>
                    <ul className={classes.circle}>
                      <li>
                        <Typography variant="subtitle2">
                          Debes proporcionar la dirección de entrega para que la Plataforma muestre los Proveedores
                          disponibles en tu área de entrega.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">
                          Una vez que selecciones un Proveedor, serás llevado a la página del menú de ese Proveedor para
                          que selecciones y agregues tus Bienes al carrito.
                        </Typography>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Realización del Pedido</Typography>
                    <ul className={classes.circle}>
                      <li>
                        <Typography variant="subtitle2">
                          Para completar un Pedido, sigue las instrucciones en pantalla después de hacer clic en
                          ‘Finalizar Compra’. Es posible que necesites proporcionar detalles adicionales para que
                          completemos tu Pedido. Debes revisar y confirmar que toda la información que proporcionas,
                          incluyendo los montos, detalles de entrega, información personal, información de pago y
                          códigos de cupones (si aplica) es verdadera, precisa y completa antes de hacer clic en
                          “REALIZAR PEDIDO”. Un Pedido se realiza con éxito cuando recibes un correo electrónico de
                          confirmación que contiene tu recibo de Pedido de nuestra parte.
                        </Typography>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Cancelación de un Pedido</Typography>
                    <ul className={classes.circle}>
                      <li>
                        <Typography variant="subtitle2">
                          Por favor, contáctanos inmediatamente a través de nuestra función de chat de soporte al
                          cliente en la aplicación si deseas cancelar tu Pedido después de haberlo realizado. Tienes
                          derecho a cancelar tu Pedido siempre que un Proveedor no haya aceptado tu Pedido.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">Reembolsos</Typography>
                        <ul>
                          <li>
                            <Typography variant="subtitle2">Pedidos con Pago en Línea</Typography>
                            <Typography variant="subtitle2">
                              Tienes derecho a un reembolso por un Pedido cancelado solo si un Proveedor no ha aceptado
                              tu Pedido. Si decides cancelar tu Pedido después de que haya sido aceptado por el
                              Proveedor, entiendes que no se emitirán reembolsos (ya sea en su totalidad o en parte) y
                              que perderás la entrega de tu Pedido cancelado.
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="subtitle2">Pedidos con Pago Contra Entrega</Typography>
                            <Typography variant="subtitle2">
                              Tienes derecho a cancelar tu Pedido solo si un Proveedor no ha aceptado tu Pedido. Si
                              decides cancelar tu Pedido después de que haya sido aceptado por el Proveedor, entiendes
                              que perderás la entrega de tu Pedido cancelado y que el pago contra entrega puede ser
                              eliminado de tu lista de métodos de pago disponibles para tus futuros pedidos.
                            </Typography>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Dino's Pedidos se reserva el derecho de cancelar cualquier Pedido y/o suspender, desactivar o terminar tu
                      cuenta de Dino's Pedidos a su exclusiva discreción si sospecha razonablemente o detecta un comportamiento
                      fraudulento o actividad asociada con tu cuenta de Dino's Pedidos y/o con tu Pedido.{" "}
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Precios y Pagos
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">
                      Los precios cotizados en la Plataforma se mostrarán en la moneda nacional del país aplicable y
                      estarán sujetos a los impuestos aplicables. Los precios y ofertas en las Plataformas pueden variar
                      de los precios y ofertas ofrecidos por nuestros Proveedores (ya sea en sus propios sitios web,
                      aplicaciones móviles o en sus establecimientos físicos).
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">incluyen IMPUESTOS, IVA u otro impuesto equivalente; o</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">excluyen IMPUESTOS, IVA u otro impuesto equivalente.</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Un desglose de los precios y cargos adicionales se muestra antes de Finalizar la Compra. Cuando
                      realizas un Pedido, aceptas todos los montos, cargos adicionales y el monto final ‘Total’ que se
                      te muestra.{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Los gastos de envío se aplican a cada Pedido a menos que:</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      optes por recoger tu Pedido directamente del Proveedor (“<b>Recogida</b>”);
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      tengas un cupón promocional o de descuento válido y lo apliques al Finalizar la Compra; o
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">a menos que se indique lo contrario.</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Los precios indicados en las Plataformas son al momento de cada Pedido y pueden estar sujetos a
                      cambios.
                    </Typography>
                    <li>
                      <Typography variant="subtitle2">
                        Puedes elegir pagar un Pedido utilizando cualquiera de los diferentes métodos de pago ofrecidos
                        en las Plataformas, incluyendo:
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle2">
                        Nuestros socios de pago: Visa, Mastercard, American Express, Google Pay, PayPal, Apple Pay;
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle2">Pago Contra Entrega; o</Typography>
                    </li>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Cualquier otro método de pago que ofrezcamos de vez en cuando.</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Si tienes crédito existente en tu cuenta de Dino's Pedidos o cupones promocionales o de descuento
                      válidos, puedes usarlos para pagar parte o la totalidad de tu Pedido, según corresponda.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Después de que un Pedido se realice con éxito, recibirás un correo electrónico de confirmación de
                      nuestra parte con tu recibo de Pedido. Los gastos de envío no aparecerán en tu recibo de Pedido si
                      optas por la Recogida.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Métodos de Pago</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Dino's Pedidos se reserva el derecho de ofrecer métodos de pago adicionales y/o eliminar métodos de pago
                      existentes en cualquier momento a su exclusiva discreción. Si eliges pagar utilizando un método de
                      pago en línea, el pago será procesado por nuestro(s) proveedor(es) de servicios de pago de
                      terceros. Con tu consentimiento, la información de tu tarjeta de crédito/pago será almacenada con
                      nuestro(s) proveedor(es) de servicios de pago de terceros para futuros pedidos. Dino's Pedidos no
                      almacena la información de tu tarjeta de crédito o pago.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Debes asegurarte de que tienes fondos suficientes en tu tarjeta de crédito y débito para cumplir
                      con el pago de un Pedido. En la medida en que sea requerido, Dino's Pedidos asume la responsabilidad de
                      los pagos realizados en nuestras Plataformas, incluyendo reembolsos, contracargos, cancelaciones
                      y resolución de disputas, siempre que sea razonable y justificable y de acuerdo con estos
                      Términos.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Entrega, Recogida y Entrega por el Proveedor
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">Áreas de Entrega</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Entiendes que nuestros Proveedores ofrecen sus Bienes en áreas de entrega específicas y nuestros
                      Proveedores varían de un área de entrega a otra. Al ingresar tu dirección de entrega en las
                      Plataformas, verás los Proveedores que te ofrecemos en ese momento. Las áreas de entrega pueden
                      expandirse, reducirse o cambiar dependiendo de las condiciones climáticas y de tráfico y
                      situaciones de fuerza mayor.{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Tiempo de Entrega</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Dino's Pedidos entregará tu Pedido a la dirección de entrega que nos hayas proporcionado. Puedes elegir
                      que tu Pedido sea entregado “LO ANTES POSIBLE” o programado para un horario específico. Se te
                      proporcionará un tiempo estimado de entrega en tu correo electrónico de confirmación, pero los
                      tiempos de entrega pueden variar dependiendo de factores que no controlamos (por ejemplo,
                      cantidad de pedidos, distancia, hora del día (horas pico), condiciones climáticas, condiciones de
                      tráfico, etc.). Puedes ver el tiempo restante de entrega de un Pedido cuando haces clic en ‘Mis
                      pedidos’ en las Plataformas. Reconoces que el tiempo de entrega que te proporcionamos es solo una
                      estimación y los Pedidos pueden llegar antes o después. Para asegurarte de no perder la entrega de
                      un Pedido, debes asegurarte de que tú o alguien esté en el lugar de entrega para recibir el Pedido
                      una vez que se haya realizado. Si tu Pedido contiene Alcohol o Tabaco (si aplica) y tú o el
                      destinatario es o parece ser menor de la edad legal, o no proporciona una identificación válida,
                      Dino's Pedidos se reserva el derecho de no entregar tu Pedido.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Entregas Fallidas o No Exitosas</Typography>
                  </li>
                  <ul className={classes.circle}>
                    <li>
                      <Typography variant="subtitle2">
                        En casos en los que intentamos entregar un Pedido pero no podemos hacerlo debido a razones
                        causadas por ti, incluyendo, pero no limitado a:
                      </Typography>
                      <ul>
                        <li>
                          <Typography variant="subtitle2">
                            no había nadie presente o disponible para recibir el Pedido; o
                          </Typography>
                        </li>
                        <li>
                          <Typography variant="subtitle2">
                            el cliente no pudo ser contactado a pesar de los intentos de contactarlo a través del número
                            de teléfono proporcionado; o
                          </Typography>
                        </li>
                        <li>
                          <Typography variant="subtitle2">
                            falta de acceso adecuado o suficiente para entregar el Pedido con éxito;
                          </Typography>
                        </li>
                        <li>
                          <Typography variant="subtitle2">
                            falta de un lugar adecuado o seguro para dejar el Pedido; o
                          </Typography>
                        </li>
                        <li>
                          <Typography variant="subtitle2">
                            en el caso de Bienes Restringidos, el cliente no cumplió con los requisitos de edad legal o
                            la entrega no consideró seguro o apropiado que el cliente recibiera los Bienes Restringidos.
                          </Typography>
                        </li>
                      </ul>
                      <li>
                        <Typography variant="subtitle2">Cancelaciones por No Presentarse</Typography>
                        <Typography variant="subtitle2" className={classes.MV2}>
                          Si sigues sin poder ser contactado o no recibes el Pedido dentro de los diez (10) minutos
                          posteriores a la llegada del Pedido a tu dirección de entrega, Dino's Pedidos se reserva el derecho
                          de cancelar el Pedido sin reembolso o remedio para ti.
                        </Typography>
                      </li>
                    </li>
                  </ul>
                  <li>
                    <Typography variant="subtitle2">Pedido Incorrecto, Artículos Faltantes, Bienes Defectuosos</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Al recibir tu Pedido, si descubres que hay problemas con tu Pedido (por ejemplo, pedido
                      incorrecto, pedido defectuoso o artículos faltantes), por favor contacta al soporte al cliente a
                      través de uno de los métodos indicados en la Cláusula 1.3 anterior de inmediato. En algunos
                      casos, Dino's Pedidos puede solicitar pruebas fotográficas y/o información adicional para investigar
                      adecuadamente el problema con tu Pedido. Si determinamos que el Pedido y/o los Bienes que
                      recibiste no están en condiciones o calidad satisfactorias, te compensaremos por tu Pedido o
                      partes de tu Pedido.
                    </Typography>
                    <li>
                      <Typography variant="subtitle2">Recogida de Pedidos</Typography>
                    </li>
                    <ul className={classes.circle}>
                      <li>
                        <Typography variant="subtitle2">
                          Cuando esté disponible, tendrás la opción de recoger tu Pedido en persona directamente en las
                          instalaciones del Proveedor ("<b>Recogida</b>") en lugar de que el Pedido te sea entregado. Tu
                          correo electrónico de confirmación indicará el horario para que recojas el Pedido (“Horario de
                          Recogida”). El Proveedor preparará el Pedido para el Horario de Recogida. En algunos casos,
                          puede haber un retraso razonable. El Proveedor acepta mantener el Pedido para ti en sus
                          instalaciones por no más de un período razonable de veinte (20) minutos a partir del Horario de
                          Recogida (“<b>Tiempo de Espera</b>”) y no estará obligado a proporcionarte el Pedido si no
                          lo recoges dentro del Tiempo de Espera.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle2">
                          En caso de retrasos irrazonables en la Recogida atribuibles a ti, asumes el riesgo de cualquier
                          daño o pérdida de los Bienes o cualquier deterioro en la calidad o cambio en la condición de
                          los Bienes (por ejemplo, cambios en la temperatura adecuada para el consumo). En este caso, no
                          tendrás derecho a un reemplazo, reembolso o sustitución de los Bienes. Eres el único
                          responsable de inspeccionar los Bienes/Pedido cuando recoges tu Pedido y debes informar
                          cualquier problema y/o defecto al Proveedor antes de salir de sus instalaciones.
                        </Typography>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Entrega por el Proveedor</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      En algunos casos, nuestros Proveedores entregarán el Pedido (“Entrega por el Proveedor”). Aunque
                      haremos esfuerzos razonables para notificarte con anticipación sobre la Entrega por el Proveedor,
                      esto no siempre será posible. Cuando se aplique la Entrega por el Proveedor, podemos pedirte que
                      contactes directamente al Proveedor en caso de problemas o retrasos en tu entrega. Dino's Pedidos no será
                      responsable de ninguna manera por los Pedidos o Bienes que sean entregados por los Proveedores.{" "}
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Cupones, Descuentos y Promociones
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">
                      De vez en cuando, Dino's Pedidos puede realizar campañas de marketing y promocionales que ofrecen
                      códigos de cupones, descuentos y otras ofertas promocionales para ser utilizados en las
                      Plataformas (“<b>Cupones</b>”). Los Cupones están sujetos a períodos de validez, períodos de
                      canje y, en ciertos casos, solo pueden ser utilizados una vez.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      A menos que se indique lo contrario, los Cupones solo pueden ser utilizados en nuestras
                      Plataformas.{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Los Cupones no pueden ser canjeados por efectivo.</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Dino's Pedidos se reserva el derecho de anular, descontinuar o rechazar el uso de cualquier Cupón sin
                      previo aviso. Se aplican los términos y condiciones individuales de los restaurantes.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">
                      Podemos excluir a ciertos Proveedores del uso de Cupones en cualquier momento sin previo aviso.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Declaraciones, Garantías y Limitación de Responsabilidades
                </Typography>
                <ul className={classes.bullet}>
                  <li>
                    <Typography variant="subtitle2">Declaraciones y Garantías</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Reconoces y aceptas que el contenido en las Plataformas se proporciona “tal cual” y “según
                      disponibilidad”, y que tu uso o dependencia de las Plataformas y cualquier contenido, bienes,
                      productos o servicios accedidos u obtenidos a través de ellas es bajo tu propio riesgo y
                      discreción. Aunque Dino's Pedidos hace esfuerzos razonables para garantizar que las Plataformas y los
                      servicios que ofrecemos estén disponibles en todo momento, no garantizamos ni representamos que
                      las Plataformas se proporcionarán de manera segura, oportuna, ininterrumpida, libre de errores,
                      libre de dificultades técnicas, defectos o virus. Espera interrupciones temporales de la
                      Plataforma debido a trabajos de mantenimiento programados o regulares del sistema, tiempos de
                      inactividad atribuibles a internet o comunicaciones electrónicas o eventos de fuerza mayor.
                    </Typography>
                    <Typography variant="subtitle2">Limitación de Responsabilidad</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      En la medida permitida por la ley, Dino's Pedidos (lo que incluye a sus empleados, directores, agentes,
                      representantes, afiliados y empresa matriz) excluye toda responsabilidad (ya sea que surja por
                      contrato, negligencia o de otra manera) por pérdidas o daños que tú o cualquier tercero puedan
                      incurrir en relación con nuestras Plataformas, nuestros servicios y cualquier sitio web vinculado
                      a nuestras Plataformas y cualquier contenido o material publicado en él. Tu único recurso con
                      respecto a tu uso de las Plataformas es descontinuar su uso. Las entidades de Dino's Pedidos, sus
                      agentes, representantes y proveedores de servicios no serán responsables por ningún daño indirecto,
                      especial, incidental, consecuencial o ejemplar que surja de tu uso de las Plataformas o por
                      cualquier otro reclamo relacionado de alguna manera con tu uso de las Plataformas. Estas
                      exclusiones de daños indirectos, especiales, consecuenciales y ejemplares incluyen, sin
                      limitación, daños por pérdida de beneficios, pérdida de datos, pérdida de buena voluntad,
                      interrupción del trabajo, falla o mal funcionamiento de la computadora, o cualquier otro daño o
                      pérdida comercial, incluso si las entidades de Dino's Pedidos, sus agentes, representantes y proveedores
                      de servicios han sido informados de la posibilidad de tales daños y sin importar la teoría legal o
                      equitativa sobre la cual se base el reclamo. Debido a que algunos estados o jurisdicciones no
                      permiten la exclusión o limitación de responsabilidad por daños consecuenciales o incidentales, en
                      dichos estados o jurisdicciones, la responsabilidad de Dino's Pedidos, las entidades de Dino's Pedidos, sus
                      agentes, representantes y proveedores de servicios estará limitada en la medida permitida por la
                      ley.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle2">Declaraciones del Proveedor</Typography>
                    <Typography variant="subtitle2" className={classes.MV2}>
                      Dino's Pedidos no será responsable de las acciones u omisiones del Proveedor ni de ti en relación con la
                      provisión de los Bienes y cuando se aplique la Entrega por el Proveedor a tu Pedido. Dino's Pedidos no
                      asume ninguna responsabilidad por la cantidad, calidad, condición u otras representaciones de los
                      Bienes y/o servicios proporcionados por los Proveedores ni garantiza la precisión o integridad de
                      la información (incluyendo información del menú, fotos e imágenes de los Bienes) mostrada en la
                      lista/oferta del Proveedor en la Plataforma. Nada en estos Términos excluirá la responsabilidad
                      del Proveedor por muerte o lesiones personales resultantes de la negligencia grave o mala conducta
                      intencional del Proveedor.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Responsabilidad del Proveedor
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Los Proveedores son responsables de la preparación, condición y calidad de los Bienes. En casos de
                  Entrega por el Proveedor, los Proveedores son responsables de la entrega de los Bienes y/o Pedidos.
                  Dino's Pedidos no será responsable por ninguna pérdida o daño que surja de tu relación contractual con el
                  Proveedor.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Protección de Datos Personales (Información Personal)
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Aceptas y consientes que Dino's Pedidos y cualquiera de sus empresas afiliadas recopilen, usen, procesen y
                  divulguen tus Datos Personales de acuerdo con estos Términos y como se describe más detalladamente en
                  nuestra Política de Privacidad. Nuestra Política de Privacidad está disponible a través de los enlaces
                  en nuestras Plataformas y formará parte de estos Términos.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Indemnización
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Aceptas indemnizar, defender y mantener indemne a Dino's Pedidos, sus directores, funcionarios, empleados,
                  representantes, agentes y afiliados, de cualquier y toda reclamación de terceros, responsabilidad,
                  daños y/o costos (incluyendo, pero no limitado a, honorarios legales) que surjan de tu uso de las
                  Plataformas o de tu incumplimiento de estos Términos.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Enlaces y Sitios Web de Terceros
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Las Plataformas pueden contener enlaces a otros sitios web de terceros y, al hacer clic en estos
                  enlaces, aceptas hacerlo bajo tu propio riesgo. Dino's Pedidos no controla ni respalda estos sitios web de
                  terceros o enlaces y no será responsable del contenido de estas páginas vinculadas. Dino's Pedidos no acepta
                  responsabilidad ni asume obligación alguna por cualquier pérdida o daño que puedas sufrir en relación
                  con tu acceso y uso de estos enlaces y sitios web de terceros.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Terminación
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Dino's Pedidos tiene el derecho de terminar, suspender o eliminar tu cuenta y acceso a las Plataformas,
                  incluyendo cualquier servicio de entrega que te proporcionemos en relación con un Pedido, por
                  cualquier motivo, incluyendo, sin limitación, si Dino's Pedidos, a su exclusiva discreción, considera que tu
                  uso es inaceptable, o en caso de cualquier incumplimiento por tu parte de los Términos. Dino's Pedidos
                  puede, pero no está obligada a, proporcionarte una advertencia antes de terminar tu uso de los Sitios
                  Web.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Enmiendas
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Dino's Pedidos puede enmendar estos Términos en cualquier momento a su exclusiva discreción. Los Términos
                  enmendados serán efectivos inmediatamente después de su publicación y aceptas los nuevos Términos al
                  continuar usando las Plataformas. Es tu responsabilidad revisar los Términos regularmente. Si no
                  estás de acuerdo con los Términos enmendados, ya sea en su totalidad o en parte, debes dejar de usar
                  las Plataformas inmediatamente.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Divisibilidad
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Si cualquier disposición de estos Términos de Uso es considerada inválida por cualquier tribunal con
                  jurisdicción competente, la invalidez de dicha disposición no afectará la validez de las disposiciones
                  restantes de estos Términos de Uso, las cuales permanecerán en pleno vigor y efecto. Ninguna renuncia
                  a cualquier disposición en estos Términos de Uso será considerada una renuncia adicional o continua de
                  dicha disposición o cualquier otra disposición.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Ley Aplicable
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes del país / tribunales de
                  jurisdicción.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Contáctanos
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  Si deseas contactarnos con respecto a cualquier pregunta o comentario que puedas tener, por favor
                  envía un correo electrónico a nuestro correo de soporte al cliente o a través de nuestra función de
                  chat de soporte al cliente en la aplicación.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2" className={classes.boldText}>
                  Idioma Prevalente
                </Typography>
                <Typography variant="subtitle2" className={classes.MV3}>
                  En caso de disputa sobre los Términos, la versión en inglés prevalecerá. La versión en inglés de estos
                  Términos controlará en todos los aspectos y prevalecerá en caso de cualquier inconsistencia con las
                  versiones traducidas.
                </Typography>
              </li>
            </ol>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default React.memo(Terms);