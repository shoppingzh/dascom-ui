import { getPlatform } from 'dascom-ui/lib/utils/common'
import pc from './pc'
import app from './app'

export default getPlatform() === 'pc' ? pc : app
