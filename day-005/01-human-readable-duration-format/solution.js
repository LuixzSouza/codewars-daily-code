function formatDuration (seconds) {
  if (seconds === 0) return "now"
  
  const timeUnits = [
    {name: 'year', value: 365 * 24 * 60 * 60},
    {name: 'day', value: 24 * 60 * 60},
    {name: 'hour', value: 60 * 60},
    {name: 'minute', value: 60},
    {name: 'second', value: 1},
  ]
  
  let parts = [] // guardar as partes
  
  for (let i = 0; i < timeUnits.length; i++) {
    const unitName = timeUnits[i].name;
    const unitValue = timeUnits[i].value
    
    const amount = Math.floor(seconds / unitValue)
    
    if (amount > 0) {
      const text = amount === 1 ? unitName : unitName + "s"
      
      parts.push(amount + " " + text)
      
      seconds = seconds % unitValue
    }
  }
  
  if (parts.length === 1) {
    return parts[0]
  }
  
  const lastPart = parts.pop();
  
  return parts.join(", ") + " and " + lastPart
}
