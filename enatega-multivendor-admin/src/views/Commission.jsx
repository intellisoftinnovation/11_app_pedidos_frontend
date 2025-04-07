import React from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import Header from '../components/Headers/Header'
import { restaurants, updateCommission } from '../apollo'
import CustomLoader from '../components/Loader/CustomLoader'
import useGlobalStyles from '../utils/globalStyles'
import { Container, Box, Typography, Grid, Input, Button } from '@mui/material'
import useStyles from '../components/Rider/styles'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { ReactComponent as CommissionIcon } from '../assets/svg/svg/CommisionRate.svg'
import { useTranslation, withTranslation } from 'react-i18next'

const GET_RESTAURANTS = gql`
  ${restaurants}
`
const UPDATE_COMMISSION = gql`
  ${updateCommission}
`

const Commission = () => {
  const getValues = id => {
    const inputElement = document.getElementById(id);
    if (!inputElement) {
      console.error(`Input element with id ${id} not found`);
      return { id, commissionRate: 0 }; // Devolvemos 0 si no se encuentra el input
    }
    const commissionRate = inputElement.value;
    return { id, commissionRate: +commissionRate }
  }

  const [mutate, { error }] = useMutation(UPDATE_COMMISSION)

  const { data, error: errorQuery, loading: loadingQuery } = useQuery(GET_RESTAURANTS)
  console.log('data:', data); // Verifica los datos devueltos
  console.log('errorQuery:', errorQuery); // Verifica el estado del error

  const globalClasses = useGlobalStyles()
  const classes = useStyles()
  const { t } = useTranslation()

  const handleSuccessButtonClick = () => {
    NotificationManager.success(
      t('UpdateSuccessful'),
      t('CommissionRates'),
      3000,
      { className: 'customNotification' }
    )
  }

  const handleErrorButtonClick = () => {
    NotificationManager.error(t('Update Error'), t('Commission Rates'), 3000, {
      className: 'customNotification'
    })
  }

  const handleSaveButtonClick = id => {
    const result = getValues(id)

    // Validar commissionRate para asegurarse de que no sea negativo
    if (result.commissionRate < 0) {
      NotificationManager.error(
        t('The value Should not be in the negative'),
        t('Commission Rates'),
        3000,
        { className: 'customNotification' }
      )
      return
    }

    mutate({
      variables: result,
      onCompleted: handleSuccessButtonClick,
      onError: handleErrorButtonClick
    })
  }

  return (
    <>
      <Header />
      <Grid container>
        <NotificationContainer />
        <Grid item lg={8}>
          <Container className={globalClasses.flex} fluid>
            <Box container className={classes.container}>
              <Box item className={classes.heading}>
                <Typography variant="h6" className={classes.text}>
                  {t('CommissionRates')}
                </Typography>
              </Box>
              <Box className={classes.form}>
                {/* {errorQuery ? <span>Error: {errorQuery.message}</span> : null} */}
                {loadingQuery ? (
                  <CustomLoader />
                ) : (
                  data && data.restaurants ? (
                    <>
                      {data.restaurants.map(restaurant => (
                        <Grid key={restaurant._id} container spacing={1}>
                          <Grid item sm={5} mt={3}>
                            {restaurant.name}
                          </Grid>
                          <Grid item sm={4}>
                            <Input
                              disableUnderline
                              className={globalClasses.input}
                              id={restaurant._id}
                              placeholder={t('PHCommission')}
                              inputProps={{ min: 0 }}
                              type="number"
                              step="1"
                              defaultValue={restaurant.commissionRate}
                            />
                          </Grid>
                          <Grid item sm={3}>
                            <Button
                              className={globalClasses.button}
                              onClick={() => handleSaveButtonClick(restaurant._id)}>
                              {t('Save')}
                            </Button>
                          </Grid>
                        </Grid>
                      ))}
                    </>
                  ) : (
                    <span>{t('NoRestaurantsFound')}</span>
                  )
                )}
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }} mt={5} ml={-3} order={{ xs: 1, lg: 2 }}>
          <CommissionIcon />
        </Grid>
      </Grid>
    </>
  )
}

export default withTranslation()(Commission)
