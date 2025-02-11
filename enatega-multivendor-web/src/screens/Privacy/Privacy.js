/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import { Header, LoginHeader } from "../../components/Header";
import UserContext from "../../context/User";
import useStyle from "./styles";
import Analytics from "../../utils/analytics";

function PrivacyPolicy() {
  useEffect(async () => {
    await Analytics.track(Analytics.events.NAVIGATE_TO_PRIVACY_POLICY);
  }, []);
  const classes = useStyle();
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Grid className={classes.root}>
      {isLoggedIn ? <Header /> : <LoginHeader showIcon />}
      <Grid container className={classes.mainContainer}>
        <Box className={classes.imageContainer}>
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            Política de Privacidad
          </Typography>
        </Box>
        <Grid container item xs={12} className={classes.mainContainer}>
          <Grid item xs={1} md={1} />
          <Grid container item xs={10} sm={10} md={9}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              className={classes.MV3}
            >
              Esta política explica cómo nosotros, Dino's Pedidos, utilizamos tu información personal que nos proporcionas al usar
              nuestro servicio, incluyendo, pero no limitado a, nuestro sitio web
              y aplicaciones móviles (apps).
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              ¿Qué información recopilamos sobre ti?
            </Typography>
            <Typography variant="subtitle2" className={classes.MV3}>
              Recopilamos información personal de ti cuando solicitas bienes o
              servicios de nosotros o usas nuestro sitio web. También
              recopilamos información cuando completas cualquier encuesta de
              satisfacción del cliente. La información de uso del sitio web
              también puede recopilarse mediante cookies.
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              Cookies y Google Analytics
            </Typography>
            <Typography variant="subtitle2" className={classes.MV3}>
              Las cookies son pequeños archivos de texto que los sitios web que
              visitas colocan en tu computadora. Se utilizan ampliamente para
              hacer que los sitios web funcionen, o funcionen de manera más
              eficiente, así como para proporcionar información a los propietarios
              del sitio.
            </Typography>
            <Typography variant="subtitle2">
              Este sitio web utiliza Google Analytics, un servicio de análisis
              web proporcionado por Google, Inc. ("Google"). Google Analytics
              utiliza "cookies", que son archivos de texto guardados en tu
              computadora, para ayudar al sitio web a analizar cómo lo usas. La
              información generada por la cookie sobre tu uso del sitio web será
              transmitida y almacenada por Google en servidores en los Estados
              Unidos. Si este sitio web anonimiza las direcciones IP, tu dirección
              IP será truncada por Google dentro de un estado miembro de la UE o
              otro estado del EEE antes de ser transmitida a los EE. UU. Solo en
              situaciones excepcionales se transmitirá tu dirección IP completa a
              los servidores de Google en los Estados Unidos y se truncará allí.
              Google utilizará esta información con el propósito de evaluar tu uso
              del sitio web, compilar informes sobre la actividad del sitio web
              para los operadores del sitio y proporcionar otros servicios
              relacionados con la actividad del sitio web y el uso de Internet.
              Google no asociará tu dirección IP con ningún otro dato que Google
              tenga. Puedes rechazar el uso de cookies seleccionando la
              configuración apropiada en tu navegador, pero ten en cuenta que si
              lo haces, es posible que no puedas utilizar la funcionalidad
              completa de este sitio web. Al usar este sitio web, das tu
              consentimiento para que Google procese los datos sobre ti de la
              manera y para los fines establecidos anteriormente. También puedes
              evitar que Google recopile información (incluida tu dirección IP)
              mediante cookies y procese esta información descargando e
              instalando este complemento del navegador:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkDecoration}
              >
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.link}
                >
                  {"https://tools.google.com/dlpage/gaoptout"}
                </Typography>
              </a>
              <Typography variant="subtitle2" className={classes.MV3}>
                La mayoría de los navegadores web permiten cierto control de la
                mayoría de las cookies a través de la configuración del
                navegador. Para obtener más información sobre las cookies,
                incluyendo cómo ver qué cookies se han establecido y cómo
                gestionarlas y eliminarlas, visita
                <a
                  href="http://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.linkDecoration}
                >
                  <Typography
                    variant="caption"
                    color="primary"
                    className={classes.link}
                  >
                    {"www.allaboutcookies.org"}
                  </Typography>
                </a>
              </Typography>
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              ¿Cómo utilizaremos la información que recopilamos de ti?
            </Typography>
            <Typography variant="subtitle2" className={classes.MV3}>
              La información que recopilamos de ti se utiliza para procesar tu
              pedido y gestionar tu cuenta. También podemos usar tu información
              para enviarte correos electrónicos sobre otros productos o
              servicios que creemos que pueden ser de tu interés.
            </Typography>
            <Typography variant="subtitle2">
              Al procesar tu pedido, podemos enviar tu información a agencias de
              referencia crediticia y prevención de fraude.
            </Typography>
            <Typography variant="subtitle2" className={classes.MV3}>
              De vez en cuando, podemos enviar tu información a terceros que
              consideramos que pueden tener bienes o servicios de tu interés. Si
              no deseas ser contactado por terceros, por favor envíanos un correo
              electrónico a
              <Typography
                variant="caption"
                color="primary"
                className={classes.link}
              >
                {" gerencia@dinospedidos.com"}
              </Typography>
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              Acceso a tu información
            </Typography>
            <Typography variant="subtitle2" className={classes.MV3}>
              Tienes derecho a solicitar una copia de la información que tenemos
              sobre ti en cualquier momento. Por favor, envíanos un correo
              electrónico si deseas recibir una copia de esta información:{" "}
              <Typography
                variant="caption"
                color="primary"
                className={classes.link}
              >
                {"gerencia@dinospedidos.com"}
              </Typography>
              . Habrá un pequeño cargo por procesar esta solicitud.
            </Typography>
            <Typography variant="subtitle1" className={classes.boldText}>
              Otros sitios web
            </Typography>
            <Typography variant="subtitle2" className={classes.MV3}>
              Nuestro sitio web puede tener enlaces a otros sitios web. Esta
              política de privacidad solo se aplica a este sitio web. Por lo
              tanto, debes leer las políticas de privacidad de los otros sitios
              web cuando los estés utilizando.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default React.memo(PrivacyPolicy);