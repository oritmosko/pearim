const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
       {(slots: ToolbarSlot) => {
         const {
           CurrentPageInput,
           Download,
           GoToNextPage,
           GoToPreviousPage,
           NumberOfPages,
           Zoom,
           ZoomIn,
           ZoomOut,
         } = slots;

         return (
           <div style={{ alignItems: 'center',
                         display: 'flex',
                         width: '100%',
                       }}>
             <div style={{ padding: '0px 2px' }}>
                 <GoToPreviousPage />
             </div>
             <div style={{ padding: '0px 2px', width: '4rem' }}>
                 <CurrentPageInput />
             </div>
             <div style={{ padding: '0px 2px' }}>
                 / <NumberOfPages />
             </div>
             <div style={{ padding: '0px 2px' }}>
                 <GoToNextPage />
             </div>
             <div style={{ padding: '0px 2px', marginRight: 'auto' }}>
                 <ZoomOut />
             </div>
             <div style={{ padding: '0px 2px' }}>
                 <Zoom />
             </div>
             <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                 <ZoomIn />
             </div>
             <div style={{ padding: '0px 22px 0 2px' }}>
                 <Download />
             </div>
           </div>
         );
       }}
     </Toolbar>
   );

export { renderToolbar };
