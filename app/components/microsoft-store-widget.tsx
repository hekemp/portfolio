import axios from 'axios'
import * as React from 'react'
import styled from 'styled-components'

const FetchMicrosoftStore = (productId: string) => {
  // CORS causes issues with this, but it does work for product lookup anyway
  axios.get(`https://apps.microsoft.com/api/ProductsDetails/GetProductDetailsById/${productId}?gl=US&hl=en-US`)
  .then((response) => {
    if (response.status !== 200) {
      throw Error(response.statusText)
    }
    return response.data
  })
  .then(data => Promise.resolve(data))
  .catch(err => Promise.reject(err))
}

const LookupMicrosoftStoreDetails = (productId: string) => {
  
  if (productId == "9N22T15N40DD") {
    return {
      "shortTitle": "Campfire",
      "shortDescription": "With Campfire by the Games and Online Harassment Hotline, players have immediate access to mental health resources and support directly in PC and Xbox gaming experiences.",
      "pdpImageUrl": 	"https://store-images.s-microsoft.com/image/apps.36519.13960040203106003.1746b5cf-1903-48d8-8ba5-cd6410c47bc2.e945056f-604a-4331-b48c-c20167690c29"
    }
  }

  return {
    "shortTitle": "",
    "shortDescription": "",
    "pdpImageUrl": 	""
  }
}

const MicrosoftStoreBox = styled.div`
  &&& {
    font-family: helvetica, arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    background: #fafafa;
    border: 1px solid #ddd;
    color: #666;
    border-radius: 3px;
    padding: 10px;
    font-weight: 300;
    & > p {
      margin: 0;
    }
    display: flex;
  }
`

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer noopener',
})`
  &&& {
    color: #4183c4;
    border: 0;
    text-decoration: none;
  }
`

const MicrosoftStoreThumbnail = styled.img`
  &&& {
    max-width: 25%;
    height: auto;
    object-fit: scale-down;
  }
`

const MicrosoftStoreContext = styled.div`
  &&& {
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
`

interface IMicrosoftStoreData {
  shortTitle: string
  shortDescription: string
  pdpImageUrl: string
}

interface IMicrosoftStoreWidgetProps {
  productId: string
  data?: IMicrosoftStoreData
  onDataFetched?: (product: any) => void
}

interface IMicrosoftStoreWidgetState {
  product: IMicrosoftStoreData
}

class MicrosoftStoreWidget extends React.Component<IMicrosoftStoreWidgetProps, IMicrosoftStoreWidgetState> {
  constructor(props: IMicrosoftStoreWidgetProps) {
    super(props)
    let product: IMicrosoftStoreData = {
      shortTitle: "",
      shortDescription: "",
      pdpImageUrl: ""
    }

    if (this.props.data) {
      product = this.props.data
    }

    this.state = {
      product,
    }
  }

  public componentDidMount() {
    const { data, onDataFetched } = this.props
    if (data) {
      return Promise.resolve()
    }

    /* Disabling, as CORS causes issues. Using plain text look up for now
    return FetchMicrosoftStore(this.props.productId)
      .then((product) => {
        this.setState({product})
        if (onDataFetched) {
          onDataFetched(product)
        }
        return product
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.error(error)
      })
      */

      var product = LookupMicrosoftStoreDetails(this.props.productId);
      this.setState({product})
      if (onDataFetched) {
        onDataFetched(product)
      }
  }

  public render() {
    const { productId } = this.props
    const { product } = this.state
    const appUrl = `https://apps.microsoft.com/detail/${productId}`

    return (
      <MicrosoftStoreBox>
        <MicrosoftStoreThumbnail src={product.pdpImageUrl}/>
        <MicrosoftStoreContext>
          <h1>
            <Link href={appUrl} title={product.shortTitle}>{product.shortTitle}</Link>
          </h1>
          <p className='description'><span>{product.shortDescription}</span></p>
          <a href={`https://get.microsoft.com/installer/download/${productId}?referrer=appbadge`} target="_self" >
            <img src="https://get.microsoft.com/images/en-us%20dark.svg" width="auto"/>
          </a>
        </MicrosoftStoreContext>
      </MicrosoftStoreBox>
    )
  }
}

export default MicrosoftStoreWidget