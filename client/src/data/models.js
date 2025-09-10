export const models = [
  { id:1, name:'ChatGPT',    desc: 'by OpenAI',       android:0, IOS:1, web:1, free:1, monthly:'$100/month',  annual:'$90/month', version:'GPT 5.0' },
  { id:2, name:'Perplexity', desc: 'by PerplexityAI', android:1, IOS:1, web:1, free:1, monthly:'$80/month',  annual:'$70/month',     version:'3.7.3v2' },
  { id:3, name:'Claude',     desc: 'by Anthropic',    android:0, IOS:0, web:1, free:1, monthly:'$75/month',  annual:'$70/month',     version:'2.1' },
  { id:4, name:'Gemini',     desc: 'by Google',          android:1, IOS:1, web:1, free:1, monthly:'$115/month',  annual:'$100/month',     version:'v2.3' }
]

export const leaderboard = [
  {rank: 1, model: 'Claude', scale: 'SIRI-2', rmse: 0.897, Nruns: 30},
  {rank: 2, model: 'Chat-gpt', scale: 'SIRI-2', rmse: 0.497, Nruns: 20},
  {rank: 3, model: 'Gemini', scale: 'SIRI-2', rmse: 0.157, Nruns: 30}
]