function convertDate(date) {
  const fecha = date.split('-')
  const anos = fecha[0]
  const meses = fecha[1]
  const dias = fecha[2]

  return `${dias}/${meses}/${anos}`

}

export default (context, inject) => {
  inject('convertDate', date => convertDate(date))
}
