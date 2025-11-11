
export default function MenuCard() {
   return (
      // className="fixed flex flex-col right-4 top-4 bottom-4 bg-white w-80 rounded-2xl shadow-lg overflow-hidden"
      <div className="sticky right-0 flex flex-col top-4 bg-white w-[350px] rounded-2xl shadow-lg overflow-hidden"  style={{height: 'calc(100vh - 2rem)'}}>
         <h2 className="text-xl font-semibold mb-4 p-2">Table $</h2>
         <div className="bg-cyan-100 w-full p-2 flex-1 overflow-y-auto thin-scrollbar">
            <ul>
               <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
               <li>6</li>
               <li>7</li>
               <li>8</li>
               <li>9</li>
               <li>10</li>
               <li>11</li>
               <li>12</li>
               <li>13</li>
               <li>14</li>
               <li>15</li>
               <li>16</li>
               <li>17</li>
               <li>18</li>
               <li>19</li>
               <li>20</li>
               <li>21</li>
               <li>22</li>
               <li>23</li>
               <li>24</li>
               <li>25</li>
               <li>26</li>
               <li>27</li>
               <li>28</li>
               <li>29</li>
               <li>30</li>
            </ul>
         </div>
         <div className=" w-full bg-transparent p-4" style={{height: 200}}>
            content
         </div>
      </div>
   );
}
