import styles from 'styled-components'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

const Container = styles.section`
  width: 1200px;
  margin: 0 auto;
`

const FaqSection = styles.section`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: space-between;
  margin: 80px 120px
`
const SectionTitleWrp = styles.div`
width:588px;`
const SectionTitle = styles.h1`
font-family: 'Inter';
font-weight: 600;
font-size: 48px;
line-height: 58px;

letter-spacing: 0.2px;
color: #212121;
  & span {
    font-size: 32px;
    color: #b2b2b2;
  }
`
const SectionDesc = styles.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #757575;`

const FaqAccorWrp = styles.div`
width:542px;`

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&:before': {
    display: 'none',
  },
}))
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'none',
  // flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '2px solid rgba(0, 0, 0, .125)',
  backgroundColor: 'rgba(0, 0, 0, 0.02)',
}))

const ContactPresenter = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }
  return (
    <Container>
      <FaqSection>
        <SectionTitleWrp>
          <SectionTitle>
            FAQ <span>자주 묻는 질문</span>
          </SectionTitle>
          <SectionDesc>스위트 게임에 궁금한 것이 있으신가요?</SectionDesc>
        </SectionTitleWrp>
        <FaqAccorWrp>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ArrowForwardIosSharpIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>배송조회를 하고 싶어요</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 1, Answer 1, Answer 1, Answer 1, Answer 1, Answer 1,
                Answer 1, Answer 1, Answer 1, Answer 1, Answer 1, Answer 1,
                Answer 1, Answer 1, Answer 1
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel1dh-content"
              id="panel1dh-header"
            >
              <Typography>
                받은 제품에 문제가 있어요 &#40;교환 및 환불 &#41;
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 2, Answer 2, Answer 2, Answer 2, Answer 2, Answer 2,
                Answer 2, Answer 2, Answer 2, Answer 2, Answer 2, Answer 2,
                Answer 2, Answer 2
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                일부 컴포넌트를 잃어버렸어요. 따로 구매할 수 있나요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 3, Answer 3, Answer 3, Answer 3, Answer 3, Answer 3,
                Answer 3, Answer 3, Answer 3, Answer 3, Answer 3, Answer 3,
                Answer 3, Answer 3, Answer 3, Answer 3
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>대량구매 &#47; 나라장터 구매 관련 문의</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 4, Answer 4, Answer 4, Answer 4, Answer 4, Answer 4,
                Answer 4, Answer 4, Answer 4, Answer 4, Answer 4, Answer 4,
                Answer 4, Answer 4, Answer 4, Answer 4,
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>PC 게임에 문제가 있습니다</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 5, Answer 5, Answer 5, Answer 5, Answer 5, Answer 5,
                Answer 5, Answer 5, Answer 5, Answer 5, Answer 5
              </Typography>
            </AccordionDetails>
          </Accordion>
        </FaqAccorWrp>
      </FaqSection>
    </Container>
  )
}

export default ContactPresenter
