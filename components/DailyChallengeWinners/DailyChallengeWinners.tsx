import { FC, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Spinner } from '@components/System'
import { Select } from '@components/System/Select'
import { MapLeaderboardType } from '@types'

import { StyledDailyChallengeWinners } from './'
import { WinnerItem } from './WinnerItem'

type Props = {
  removeHeader?: boolean
  prevWinners: MapLeaderboardType[]
}

const DailyChallengeWinners: FC<Props> = ({ removeHeader, prevWinners }) => {
  return (
    <StyledDailyChallengeWinners>
      {!removeHeader && (
        <div className="leaderboardTop">
          <span className="title">Previous Winners</span>
        </div>
      )}

      {prevWinners.length > 0 && prevWinners.map((winner, idx) => <WinnerItem key={idx} winner={winner} />)}

      {prevWinners.length <= 0 && (
        <span className="notPlayedMsg">There were no Daily Challenge winners in the last week.</span>
      )}
    </StyledDailyChallengeWinners>
  )
}

export default DailyChallengeWinners