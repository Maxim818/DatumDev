<!-- =========================================================================================
    File Name: Invoice.vue
    Description: Invoice Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="currencydetail-page">        

        <vx-card id="currencydetail-container">

            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base" style="border-bottom: 1px;">

                <div class="vx-col w-full md:w-3/4">                                      
                    
                    <div class="flex items-center">
                        
                        <div class="">
                            <img src="/images/coins/bitcoin.png">   
                        </div> 
                        <div class="ml-8">
                            <h2>BitCoin</h2>
                            <small>BTC</small>
                        </div>

                    </div>      

                                     
                </div>

                <div class="vx-col w-full md:w-1/4 text-right">
                    <h1>$715914</h1>
                    <div class="invoice__invoice-detail mt-6">
                        <h6>-0.84%</h6>
                    </div>
                </div>

            </div>

            <div  class="vx-row leading-loose p-base">
                <div class="vx-col w-full md:w-2/3">
                    <h5>Summary</h5>
                    <div class="invoice__recipient-info my-4">
                        <p>Bitcoin (₿) (BTC) is a decentralized virtual digital currency that can be sent between users through the Bitcoin peer-to-peer network, without the need for intermediaries like banks or governments. It was the first example of a cryptocurrency, a growing asset class that shares some characteristics of traditional currencies, but has verification based on cryptography.</p>
                        <p>The term ‘Bitcoin’ can refer to the token (a snippet of code that represents ownership of a digital value) or it can refer to the technology (a distributed network that maintains the ledger of balances of the Bitcoin token).</p>
                        <p>The idea for Bitcoin and blockchain was first published in an online cryptography forum in November 2008, by an anonymous person (or group) called Satoshi Nakamoto. The white paper, entitled ‘Bitcoin: A Peer-to-Peer Electronic Cash System’ outlined an electronic payment system based on mathematical proof, and explained how the different parts of the Bitcoin protocol would operate and be kept secure. It further described how a new type of database called a blockchain would keep track of the history of all Bitcoin transactions, and be maintained by everyone in the network.</p>
                    </div>
                </div>
                <div class="vx-col w-full md:w-1/3 text-right">
                    <div class="flex justify-between sub-item">
                        <span>Market Cap</span>
                        <div>$131.32B  -0.76%</div>
                    </div>
                    <div class="flex justify-between  sub-item">
                        <span>Volumn</span>
                        <div>$8.48B -13.14%</div>
                    </div>
                    <div class="flex justify-between  sub-item">
                        <span>Circulating Supply</span>
                        <div>18,079,675</div>
                    </div>
                    <div class="flex justify-between  sub-item">
                        <span>Max Supply</span>
                        <div>21,000,000</div>
                    </div>
                </div>
            </div>

            <currency-tab />            
            
        </vx-card>
    </div>
</template>

<style type="scss">
    .sub-item {
        margin: 15px 0px;
        border-bottom: 1px solid black;
    }
</style>

<script>
import CurrencyTab from '@/datum/views/currencies/CurrencyTab.vue'

export default{
    components: {
        CurrencyTab,        
    },
    data() {
        return {
            mailTo: "",
            companyDetails: {
                name: 'Microsion Technologies Pvt. Ltd.',
                addressLine1: '9 N. Sherwood Court',
                addressLine2: 'Elyria, OH',
                zipcode: '94203',
                mailId: 'hello@pixinvent.net',
                mobile: '+91 999 999 9999',
            },
            recipientDetails: {
                fullName: 'Peter Stark',
                addressLine1: '8577 West West Drive ',
                addressLine2: 'Holbrook, NY',
                zipcode: '90001',
                mailId: 'peter@mail.com',
                mobile: '+91 988 888 8888',
            },
            invoiceDetails: {
                invoiceNo: '001/2019',
                invoiceDate: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
            },
            invoiceData: {
                tasks: [
                    {
                        id: 1,
                        task: 'Website Redesign',
                        hours: 60,
                        rate: 15,
                        amount: 90000,
                    },
                    {
                        id: 2,
                        task: 'Newsletter template design',
                        hours: 20,
                        rate: 12,
                        amount: 24000,
                    },
                ],
                subtotal: 114000,
                discountPercentage: 5,
                discountedAmount: 5700,
                total: 108300,
            }
        }
    },
    computed: {

    },
    methods: {
      printInvoice() {
        window.print()
      }
    },
    mounted() {
      this.$emit("setAppClasses", "currencydetail-page")
    }
}
</script>

<style lang="scss">
@media print {
  .currencydetail-page {
    * {
      visibility: hidden;
    }

    #content-area {
      margin: 0 !important;
    }

    #currencydetail-container,
    #currencydetail-container * {
      visibility: visible;
    }
    #currencydetail-container {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: none;
    }
  }
}
</style>
